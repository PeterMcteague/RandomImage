# RandomImage

A couple of lines of javascript to pick a random image named 0-....jpg in a local folder. This was made as a request for a family member to help them with a piece of work.

The main issues with it were that I'm limited to 0-....jpg as you cannot read a file directory anymore, due to security updates, in pure javascript (And I didn't really want to make this a node application).
I also had to make it asynchronous, as every browser but firefox treated my previous way of checking images exist incorrectly.
