# Synchronous File Reader and Writer

This utility reads and writes files using Node file system synchronous reader and writer. 

This utility should only be used in batch jobs because of it synchronous nature. For applications that reads, writes files
asynchronous approach should be taken. 

> You need to have node installed in your system.

## Specifications
This is a static utility class.

### Class
- `FileUtil`

### Methods
- `readFile(fileLocation)`
- `writeFile(fileLocation, contentString)`

### Exceptions and Error Messages
- `FILE_DOES_NOT_EXITS: ' File does not exists!'`
- `CANNOT_SAVE_FILE: ' Cannot save file!'`~~

---
Return to [Index](../../../README.md)
