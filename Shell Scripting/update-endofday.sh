#!/bin/bash

# File where the date is stored
DATE_FILE="endofday.txt"

# Check if the file exists, if not create it
if [ ! -f "$DATE_FILE" ]; then
  echo "File not found! Creating $DATE_FILE..."
  date +"%Y-%m-%d" > "$DATE_FILE"
  echo "Date set to current date."
  exit 0
fi

# Read the date from the file
FILE_DATE=$(cat "$DATE_FILE")

# Get the current date in the same format
CURRENT_DATE=$(date +"%Y%m%d")

# Check if the date in the file is not the current date
if [ "$FILE_DATE" != "$CURRENT_DATE" ]; then
  echo "Date in $DATE_FILE ($FILE_DATE) is not the current date."
  echo "Updating the date to $CURRENT_DATE."
  
  # Update the date in the file
  echo "$CURRENT_DATE" > "$DATE_FILE"
else
  echo "Date in $DATE_FILE is already the current date ($CURRENT_DATE)."
fi
