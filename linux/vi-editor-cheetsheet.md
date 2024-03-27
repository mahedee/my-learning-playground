## Vi editor cheatsheet

### Shortcuts
- `:q` - quit without saving changes
- `:w` - write and save the file
- `:w file2.txt` - write the contents of the file to file2.txt
- `:wq` - write and save the file and quit
- `:q!` - quit without saving changes, even if there are unsaved modifications
- `:wq!` - write and save the file and quit, even if there are unsaved modifications
- `0` - move to the beginning of the line
- `$` - move to the end of the line
- `esc + u ` - undo the last change
- `ctrl + r` - redo the last change
- `x` - delete the character under the cursor
- `dd` - delete the current line
- `:r file2.txt` - read the contents of file2.txt and insert them after the current line
- `:e file2.txt` - open file2.txt for editing
- `:bn` - buffer next - go to the next buffer
- `:bp` - buffer previous - go to the previous buffer
- `:enew` - create a new buffer
- `y` / `yy` / `Y` - yank (copy) the current line / selection
- `p` / `P` - paste the yanked text after / before the cursor

- `ZZ` - save and exit
- `ZQ` - quit without saving changes    
- `:qa!` - force all unsaved changes to be lost and quit all windows
- `:help :help` - open help for the `:help` command
- `:help` - open help for the last command
- `:help {subject}` - open help for {subject}
- `:help` - open help for the last command

### Frequently Asked Questions
* How to sort lines in vi editor?
    - Press `v` for visual mode. Select the lines you want to sort. `:'<,'>sort ui` and press enter. This will sort the selected lines in ascending order. To sort in descending order, use `:'<,'>sort u!` and press enter.  
* How to search and replace in vi editor?
    - Press `:` to enter command mode. Type `s/search/replace/g` and press enter. This will replace all occurrences of `search` with `replace`. To replace only the first occurrence, use `s/search/replace/`. To replace all occurrences in a line, use `:s/search/replace/g`. To replace all occurrences in the entire file, use `:%s/search/replace/g`.   
    
 * How to page up and down in vi editor?
    - Press `ctrl + f` to page down and `ctrl + b` to page up.
    - Press `gg` to go to the beginning of the file and `G` to go to the end of the file.

 * How to copy and paste in vi editor?
    - Press `v` to enter visual mode. Use the arrow keys to select the text you want to copy. Press `y` to yank (copy) the selected text. Move the cursor to the location where you want to paste the text. Press `p` to paste the copied text after the cursor or `P` to paste before the cursor.

  * How to split the screen in vi editor?
    - Press `:sp` to split the screen horizontally. Press `:vsp` to split the screen vertically. Press `ctrl + w` followed by `h`, `j`, `k`, or `l` to move between the split windows. Press `ctrl + w` followed by `c` to close the current split window.

  * How to set number lines in vi editor?
    - Press `:set number` to display line numbers. Press `:set nonumber` to hide line numbers.

   * How to set line number for vi editor using .vimrc file?
    - Add the following line to your `.vimrc` file: `set number`. Save the file and restart vim. Line numbers will now be displayed by default. .vimrc file is located in the home directory.

### Commands
  * __vim__
    - `vim filename` - open a file in vim. If no arguments are provided, it opens an empty file.
    - `vim +20 filename` - open a file and move the cursor to line 20.
    - `vim -o readme.txt file2.txt` - open files in horizontal split windows.
    - `vim -O readme.txt file2.txt` - open files in vertical split windows.


### Modes:
- **Command mode**: When you first open a file, you are placed into command mode. This mode allows you to move around the file and perform operations, such as cutting and pasting text.
- `i` - insert mode (type text)
- `a` - append mode (insert text after cursor)
- `o` - open mode (start a new line below the cursor)   
- `:` - command-line mode (for saving, exiting, etc.)
- `esc` - return to command mode from insert mode or other modes
- `:q!` - quit without saving changes
- `:wq` - save and exit
- `esc + u ` - undo the last change
- `v` - visual mode (select characters)


### Navigation:
- `hjkl` or arrow keys - move the cursor left/down/up/right
- `/pattern` - search forwards for the pattern (use `:nohlsearch` to remove highlighting)
- `?pattern` - search backwards for the pattern
- `G` - go to end of file
- `g G` - go to end of file and clear screen
- `H` / `M` / `L` - move to top/middle/bottom of screen
- `%` - jump to matching bracket if it's on the same line. Otherwise, move to the matching bracket.
### Editing:
- `x` - delete character under the cursor
- `X` - delete character before the cursor
- `dw` - delete word at the cursor
- `"+dw` - delete word and copy it to the system clipboard
- `d$` / `D` - delete to the end of the line
- `"+d$"/"+D` - delete to the end of the line and copy it to the system clipboard
- `y` / `yy` / `Y` - yank (copy) the current line / selection
- `"+y` / `"+yy` / `"+Y` - yank (copy) the current line / selection to the system clipboard
- `p` / `P` - paste the yanked text after / before the cursor
- `J` - join the current line with the next line
- `=` - auto-indent the current line
- `#` / `=~` - format the current line as a comment / as code
- `@` - repeat the last substitution
- `.` - repeat the last command
### Marks:
- `m{a-z}` - set a mark at the cursor position
- `'{a-z}` - jump to the line of the mark {a-z}
- `''` - jump to the line where the cursor was before the latest jump
- `^` - jump to the beginning of the line
- `$` - jump to the end of the line
- `(` / `[` - jump to the beginning of the sentence / paragraph
- `)` / `]` - jump to the end of the sentence / paragraph
- `{num}` - jump to the specified line number
- `-` / `_` - jump to the first non-blank character of the line
- `|` - jump to the column specified by the cursor position (1-based)
- `0` - jump to the start of the line
- `^` - jump to the start of the line (first non-blank character)   
- `g_` - jump to the end of the line (last non-blank character)
- `{` / `}` - jump to the previous / next paragraph
- `[[` / `]]` - jump to the previous / next section heading
- `gg` / `1gt` - jump to the first line / tab page 1
- `G` / `gt` - jump to the last line / tab page
- `:b #` / `:sb #` - jump to the last buffer / split window containing "foo" in its name
- `:bf` / `:sbf` - jump to the first buffer / split window  
- `:bd #` / `:bdelete #` - delete the last buffer / split window
- `:bd` / `:bdelete` - delete the current buffer / split window
- `:ls` - list all buffers
- `:b #` - switch to buffer #
- `:n` / `:next` - go to the next buffer / split window

### Visual mode:
- `v` - start visual mode, select characters
- `V` - start visual mode, select lines
- `<C-v>` - start visual block mode, select blocks
- `o` / `O` -   move to the other end of the marked area    

### Command-line mode:  
- `/pattern` - search forwards for the pattern

