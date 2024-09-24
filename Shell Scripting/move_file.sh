#!/bin/bash

# Purpose: 
# This script checks a source directory for any files. If files exist, it moves 
# all files that are not in use to a destination directory. It skips files that 
# are currently being used by any process to avoid disruption.

# Source and destination directories (update paths as needed)
SOURCE_DIR="source_folder"     # Directory where files are located
DEST_DIR="destination_folder"  # Directory where files will be moved

# Create the destination directory if it doesn't exist
if [ ! -d "$DEST_DIR" ]; then
    mkdir -p "$DEST_DIR"
    echo "Created destination directory: $DEST_DIR"
fi

# Check if the source directory has any files
if [ "$(ls -A $SOURCE_DIR)" ]; then
    echo "Checking files in $SOURCE_DIR..."

    # Loop through each file in the source directory
    for file in "$SOURCE_DIR"/*; do
        
        #For each file in the directory, the script checks whether the file is open (in use) by any process using the lsof command.
        # Check if the file is currently in use using 'lsof' command
        if lsof | grep "$file" > /dev/null; then
            echo "File $file is currently in use. Skipping..."
        else
            # If the file is not in use, move it to the destination directory
            echo "Moving $file to $DEST_DIR..."
            mv "$file" "$DEST_DIR/"
        fi
    done
else
    echo "No files found in $SOURCE_DIR."
fi
