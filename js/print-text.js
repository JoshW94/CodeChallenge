function view_text () { 

            // Find html elements.
            var textArea = document.getElementById('editor');
            var div = document.getElementById('view_text');

            // Put the text in a variable so we can manipulate it.
            var text = textArea.value;

            // Print the text in the div made for it.
            div.innerHTML = text;
            }