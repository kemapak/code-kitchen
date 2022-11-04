# Convert DSV to JSON for Translations

## Data Setup
- Make sure you only have one worksheet in your excel/numbers file.
- Use Numbers (Not excel) to convert the data to delimiter separated value file.
  - Excel does not keep the file encoding for exporting files to tab
> Please keep in mind if your data has commas in the cell, you cannot use CSV TSV (Tab Seperated Value) could be a good alternative.
  
## Running

> You need to have node installed in your system.

From terminal/command line type the following.

Type and run the following in your terminal. 

`node convert.js [input file location] [output file location]`

input file needs to be in Delimiter Separated Value (CSV, TSV, etc)

output file needs to have a `.JSON` extension.

_For example:_

`node convert.js data/batch01.tsv data/batch01.json`
