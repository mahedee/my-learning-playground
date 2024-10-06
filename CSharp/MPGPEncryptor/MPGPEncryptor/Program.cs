using System;
using System.IO;
using Org.BouncyCastle.Bcpg.OpenPgp;
using Org.BouncyCastle.Bcpg;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities.IO;
using Org.BouncyCastle.Utilities.IO.Pem;

namespace PGPEncryptionExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // Base directory for files
            string filesDirectory = "files";

            // Paths to the input plain text file, public key file, and output encrypted file
            string publicKeyFilePath = Path.Combine(filesDirectory, "public_key.pgp");
            string inputFilePath = Path.Combine(filesDirectory, "plain.txt");
            string outputFilePath = Path.Combine(filesDirectory, "encryptedfile.txt");

            try
            {
                // Ensure the files directory exists
                if (!Directory.Exists(filesDirectory))
                {
                    Console.WriteLine($"The directory '{filesDirectory}' does not exist.");
                    return;
                }

                // Read public key from file
                using (Stream publicKeyStream = File.OpenRead(publicKeyFilePath))

                
                using (Stream inputFileStream = File.OpenRead(inputFilePath))
                using (Stream outputFileStream = File.Create(outputFilePath))
                {
                    PgpPublicKey pgpPublicKey = ReadPublicKey(publicKeyStream);

                    // Encrypt file
                    EncryptFile(outputFileStream, inputFileStream, pgpPublicKey, true, true);

                    Console.WriteLine("Encryption successful! Encrypted file saved to " + outputFilePath);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occurred during encryption: " + e.Message);
            }
        }

        // Method to read the public PGP key from stream
        private static PgpPublicKey ReadPublicKey(Stream publicKeyStream)
        {
            PgpPublicKeyRingBundle pgpPubRingBundle = new PgpPublicKeyRingBundle(PgpUtilities.GetDecoderStream(publicKeyStream));
            foreach (PgpPublicKeyRing pgpPubRing in pgpPubRingBundle.GetKeyRings())
            {
                foreach (PgpPublicKey key in pgpPubRing.GetPublicKeys())
                {
                    if (key.IsEncryptionKey)
                    {
                        return key;
                    }
                }
            }
            throw new ArgumentException("Can't find encryption key in public key ring.");
        }

        // Method to encrypt the input file using the public key
        private static void EncryptFile(Stream outputStream, Stream inputFileStream, PgpPublicKey publicKey, bool armor, bool withIntegrityCheck)
        {
            if (armor)
            {
                outputStream = new ArmoredOutputStream(outputStream);
            }

            try
            {
                PgpEncryptedDataGenerator encryptedDataGenerator = new PgpEncryptedDataGenerator(SymmetricKeyAlgorithmTag.Cast5, withIntegrityCheck, new SecureRandom());
                encryptedDataGenerator.AddMethod(publicKey);

                Stream encryptedOut = encryptedDataGenerator.Open(outputStream, new byte[1 << 16]);

                PgpCompressedDataGenerator compressedDataGenerator = new PgpCompressedDataGenerator(CompressionAlgorithmTag.Zip);
                Stream compressedOut = compressedDataGenerator.Open(encryptedOut);

                PgpLiteralDataGenerator literalDataGenerator = new PgpLiteralDataGenerator();
                Stream literalOut = literalDataGenerator.Open(compressedOut, PgpLiteralData.Binary, "plain.txt", inputFileStream.Length, DateTime.UtcNow);

                Streams.PipeAll(inputFileStream, literalOut);

                literalOut.Close();
                compressedOut.Close();
                encryptedOut.Close();

                if (armor)
                {
                    outputStream.Close();
                }
            }
            finally
            {
                outputStream.Close();
            }
        }
    }
}
