# Using XPath to extract link data

## Usage

NOTE: This small script was inspired by titaniumbones' jquery-url-extraction tool.

The goal of this guide is to arrive at a text file, with each line containing a url to download. We'll save that file as paths.txt, and feed it to the wget-loop tool. Therefore, to use this this tool you must **also download the wget-loop tool to the `tools` directory.

### Overview:

We will use [XPath](https://www.w3schools.com/xml/xpath_intro.asp) to extract a list of links and copy this list to the clipboard.  You can then paste this list to path.txt.

### 1. Open the console in Chrome
To open the Chrome console open View > Developer > JavaScript console (or right click on a web page and select "inspect".)

### 2. Copy the contents of xpath.js and paste it into the console after the >.

### 3. Update the XPath in the first line (i.e. '//a') to fine-tune the location of nodes that contain proper links.

### 4. Hit Enter and you should get a list of URLs along with a message telling you how many links have been copied to the clipboard.
