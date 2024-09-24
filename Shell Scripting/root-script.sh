#!/bin/bash

# Purpose:
# This script checks for the presence of `update-endofday.sh` and calls it to update the end-of-day process.
# It logs an error message if the script is not found.

# Define the path to the `update-endofday.sh` script (update the path as needed)
UPDATE_SCRIPT_PATH="./update-endofday.sh"

# Log file for storing messages
LOG_FILE="endofday_log.txt"

# Check if the `update-endofday.sh` script exists and is executable
if [ -f "$UPDATE_SCRIPT_PATH" ] && [ -x "$UPDATE_SCRIPT_PATH" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Running update-endofday.sh..." | tee -a "$LOG_FILE"
    
    # Execute the `update-endofday.sh` script
    bash "$UPDATE_SCRIPT_PATH"
    
    # Log the completion of the update
    echo "$(date '+%Y-%m-%d %H:%M:%S') - update-endofday.sh executed successfully." | tee -a "$LOG_FILE"
else
    # Log an error message if the script is not found or not executable
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ERROR: update-endofday.sh not found or not executable." | tee -a "$LOG_FILE"
    exit 1
fi
