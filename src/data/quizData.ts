const quizData = 
{
    "quizzes": [
        {
            "topic": "Python",
            "questions": [
              {
                "questionText": "What is the output of 'print(type(5))'?",
                "options": ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'list'>"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "Which of the following is an immutable data type in Python?",
                "options": ["list", "dict", "tuple", "set"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What does 'pip' stand for?",
                "options": ["Python Installation Package", "Preferred Installer Program", "Package Index for Python", "Program Installs Packages"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "Which keyword is used to define a function in Python?",
                "options": ["function", "def", "func", "define"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the correct way to comment out multiple lines in Python?",
                "options": ["// Comment", "/* Comment */", "# Comment", "''' Comment '''"],
                "correctAnswerIndex": 3
              },
              {
                "questionText": "What does the 'len()' function return?",
                "options": ["The value of a variable", "The length of a string, list, or tuple", "The size of an object in bytes", "The type of an object"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "How do you create a class in Python?",
                "options": ["new MyClass:", "class MyClass:", "define class MyClass:", "class MyClass()"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is a 'list comprehension'?",
                "options": ["A way to create a list using a for loop", "A function that returns a list", "A special type of list", "A way to copy a list"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "Which module is used for regular expressions in Python?",
                "options": ["math", "os", "re", "sys"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is the output of 'print(10 // 3)'?",
                "options": ["3.333", "3", "4", "3.0"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "Which method adds an element to the end of a list?",
                "options": ["add()", "append()", "insert()", "push()"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "How do you handle exceptions in Python?",
                "options": ["catch...finally", "try...except", "handle...error", "check...else"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is a 'dictionary' in Python?",
                "options": ["An ordered list of items", "A collection of unique items", "A collection of key-value pairs", "A sequence of characters"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "Which loop is used for iterating over a sequence?",
                "options": ["do-while", "for", "while", "repeat"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the output of 'print('hello'[1])'?",
                "options": ["h", "e", "l", "o"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "How do you import a module named 'example'?",
                "options": ["import 'example'", "import example", "include example", "using example"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What does 'break' statement do in a loop?",
                "options": ["Skips the current iteration", "Exits the entire loop", "Restarts the loop", "Pauses the loop"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "Which operator is used for exponentiation?",
                "options": ["^", "**", "pow()", "//"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the purpose of 'self' in a class method?",
                "options": ["It refers to the instance of the class", "It's a placeholder for arguments", "It's a built-in keyword", "It refers to the class itself"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is a lambda function?",
                "options": ["A function with no arguments", "An anonymous function", "A function that returns a list", "A special type of generator"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "How do you remove an item from a list by its value?",
                "options": ["delete()", "pop()", "remove()", "discard()"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is the output of 'print(True or False)'?",
                "options": ["True", "False", "None", "Error"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "Which function is used to get user input?",
                "options": ["get_input()", "input()", "read()", "user_input()"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the purpose of the 'pass' statement?",
                "options": ["It skips the current iteration of a loop", "It is a placeholder for future code", "It breaks out of a function", "It is used for commenting"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the output of 'print('py' * 2)'?",
                "options": ["py2", "pypy", "py py", "error"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What does 'is' operator do?",
                "options": ["Compares the values of two objects", "Checks if two variables have the same memory location", "Checks if a variable is in a list", "Compares the types of two objects"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "Which method is used to get all keys from a dictionary?",
                "options": ["get_keys()", "keys()", "items()", "values()"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the output of 'print(10 < 20 > 5)'?",
                "options": ["True", "False", "Error", "None"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is a 'decorator' in Python?",
                "options": ["A function that returns another function", "A design pattern", "A syntactic sugar for wrapping a function", "All of the above"],
                "correctAnswerIndex": 3
              },
              {
                "questionText": "How do you open a file for reading?",
                "options": ["open('file.txt', 'r')", "open_file('file.txt', 'read')", "read('file.txt')", "file.read('r')"],
                "correctAnswerIndex": 0
              }
            ]
          },
          {
            "topic": "Linear Algebra",
            "questions": [
              {
                "questionText": "What is a scalar?",
                "options": ["A vector with magnitude and direction", "A quantity with magnitude only", "A matrix with one row and one column", "A complex number"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "The product of a matrix and its inverse is:",
                "options": ["The zero matrix", "The identity matrix", "The transpose of the matrix", "The determinant of the matrix"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the determinant of an identity matrix?",
                "options": ["0", "1", "-1", "undefined"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "Which of the following is a non-square matrix?",
                "options": ["A matrix with 3 rows and 3 columns", "A matrix with 2 rows and 2 columns", "A matrix with 2 rows and 3 columns", "A matrix with 1 row and 1 column"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is a singular matrix?",
                "options": ["A matrix whose determinant is non-zero", "A matrix with all non-zero elements", "A matrix whose determinant is zero", "A matrix with only one row"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "The transpose of a matrix is obtained by:",
                "options": ["Multiplying all elements by -1", "Swapping its rows and columns", "Inverting the matrix", "Multiplying the matrix by a scalar"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is a vector space?",
                "options": ["A set of vectors that satisfy certain axioms", "A single vector", "A scalar quantity", "A matrix with infinite dimensions"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is the dot product of two orthogonal vectors?",
                "options": ["1", "-1", "0", "Their magnitudes multiplied"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is an eigenvalue?",
                "options": ["A scalar associated with a linear transformation", "A vector that changes direction", "The determinant of a matrix", "The trace of a matrix"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is the rank of a matrix?",
                "options": ["The number of rows", "The number of columns", "The number of linearly independent rows or columns", "The number of non-zero elements"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "A linear transformation maps vectors from one vector space to another while preserving:",
                "options": ["Only the length of the vectors", "The operations of vector addition and scalar multiplication", "Only the angles between the vectors", "The magnitude and direction of the vectors"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is a basis of a vector space?",
                "options": ["A set of vectors that are linearly dependent", "A set of vectors that span the entire space", "A set of linearly independent vectors that span the entire space", "A set of orthogonal vectors"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is a diagonal matrix?",
                "options": ["A matrix with all elements on the main diagonal being zero", "A matrix where all non-diagonal elements are zero", "A matrix with only one row", "A matrix with only one column"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "What is the trace of a square matrix?",
                "options": ["The sum of the elements on the main diagonal", "The sum of all elements in the matrix", "The product of the elements on the main diagonal", "The determinant of the matrix"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is a symmetric matrix?",
                "options": ["A matrix equal to its inverse", "A matrix equal to its transpose", "A matrix equal to its negative", "A matrix equal to the zero matrix"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "If A and B are two matrices, what is (AB)T?",
                "options": ["ATBT", "BTAT", "ABT", "BA"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "The solution to Ax = b exists if and only if b is in the:",
                "options": ["Null space of A", "Row space of A", "Column space of A", "Eigenvector space of A"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is the null space of a matrix A?",
                "options": ["The set of all vectors x such that Ax = 0", "The set of all vectors x such that Ax = b", "The set of all vectors that are orthogonal to A", "The set of all row vectors of A"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is an orthogonal matrix?",
                "options": ["A matrix whose rows are orthogonal", "A matrix whose inverse is equal to its transpose", "A matrix whose determinant is 1", "A matrix whose columns are orthogonal"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "The Gram-Schmidt process is used to:",
                "options": ["Find the determinant of a matrix", "Find the inverse of a matrix", "Create an orthonormal basis from a set of linearly independent vectors", "Solve a system of linear equations"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is the result of multiplying a 2x3 matrix by a 3x2 matrix?",
                "options": ["A 2x2 matrix", "A 3x3 matrix", "A 2x3 matrix", "A 3x2 matrix"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is the inverse of the matrix [[2, 0], [0, 3]]?",
                "options": ["[[0.5, 0], [0, 1/3]]", "[[2, 0], [0, -3]]", "[[0.5, 0], [0, 3]]", "[[0.5, 0], [0, -1/3]]"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "What is the scalar projection of vector **a** onto vector **b**?",
                "options": ["(a · b) / ||b||", "(a · b) / ||a||", "(a x b) / ||b||", "(a x b) / ||a||"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "If two rows of a matrix are identical, its determinant is:",
                "options": ["1", "-1", "0", "undefined"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "A linear system is called 'inconsistent' if:",
                "options": ["It has exactly one solution", "It has infinitely many solutions", "It has no solution", "The coefficient matrix is singular"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is a subspace?",
                "options": ["A subset of a vector space that is a vector space itself", "A single vector", "A set of linearly dependent vectors", "A matrix with zero elements"],
                "correctAnswerIndex": 0
              },
              {
                "questionText": "The magnitude of a vector is calculated using:",
                "options": ["The dot product", "The cross product", "The Pythagorean theorem", "The determinant"],
                "correctAnswerIndex": 2
              },
              {
                "questionText": "What is the cross product of two parallel vectors?",
                "options": ["A scalar", "The zero vector", "A non-zero vector", "Undefined"],
                "correctAnswerIndex": 1
              },
              {
                "questionText": "The process of reducing a matrix to its row echelon form is called:",
                "options": ["Matrix inversion", "Eigenvalue decomposition", "Gram-Schmidt process", "Gaussian elimination"],
                "correctAnswerIndex": 3
              },
              {
                "questionText": "What is a positive definite matrix?",
                "options": ["A matrix with all positive elements", "A symmetric matrix whose eigenvalues are all positive", "A matrix with a positive determinant", "A matrix with all non-zero elements"],
                "correctAnswerIndex": 1
              }
            ]
          },

      {
  "topic": "Trigonometry",
  "questions": [
    {
      "questionText": "What is the value of $\\sin(90^\\circ)$?",
      "options": ["0", "1", "-1", "$1/2$"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "$\\tan(\\theta)$ is equal to:",
      "options": ["$\\sin(\\theta)/\\cos(\\theta)$", "$\\cos(\\theta)/\\sin(\\theta)$", "$1/\\sin(\\theta)$", "$1/\\cos(\\theta)$"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "In a right-angled triangle, the cosine of an angle is the ratio of:",
      "options": ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Hypotenuse / Opposite"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What is the period of the function $f(x) = \\sin(x)$?",
      "options": ["$\\pi$", "$2\\pi$", "$2\\pi/3$", "$\\pi/2$"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "The value of $\\cos(0^\\circ)$ is:",
      "options": ["0", "1", "-1", "undefined"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "The identity $\\sin^2(\\theta) + \\cos^2(\\theta)$ equals:",
      "options": ["0", "1", "2", "-1"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What is the reciprocal of the sine function?",
      "options": ["Cosine", "Tangent", "Secant", "Cosecant"],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "The unit circle has a radius of:",
      "options": ["0", "1", "$\\pi$", "2"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What is the value of $\\tan(45^\\circ)$?",
      "options": ["0", "1", "$\\sqrt{3}$", "$1/\\sqrt{3}$"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "How many degrees are in one radian?",
      "options": ["$180/\\pi$", "$\\pi/180$", "360", "90"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "What is the value of $\\cos(180^\\circ)$?",
      "options": ["0", "1", "-1", "undefined"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "The Law of Sines is used to solve triangles that are not right-angled. It is given by:",
      "options": ["$a^2 = b^2 + c^2 - 2bc\\cos(A)$", "$a/\\sin(A) = b/\\sin(B) = c/\\sin(C)$", "$\\sin(A) + \\sin(B) = \\sin(C)$", "$a+b=c$"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "The value of $\\tan(\\pi/2)$ is:",
      "options": ["0", "1", "undefined", "$\\sqrt{3}$"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "What is the range of the sine function?",
      "options": ["$(-1, 1)$", "$[-1, 1]$", "$[0, 1]$", "All real numbers"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "If $\\sin(\\theta) > 0$ and $\\cos(\\theta) < 0$, in which quadrant does $\\theta$ lie?",
      "options": ["First", "Second", "Third", "Fourth"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "The double angle formula for $\\sin(2\\theta)$ is:",
      "options": ["$2\\sin(\\theta)\\cos(\\theta)$", "$2\\cos^2(\\theta) - 1$", "$1 - 2\\sin^2(\\theta)$", "$1 - \\tan^2(\\theta) / (1 + \\tan^2(\\theta))$"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "What is the value of $\\sin(30^\\circ)$?",
      "options": ["$\\sqrt{3}/2$", "$1/2$", "$1/\\sqrt{2}$", "1"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "The principal value of $\\sin^{-1}(1/2)$ is:",
      "options": ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "The Law of Cosines is given by:",
      "options": ["$a/\\sin(A) = b/\\sin(B)$", "$a^2 = b^2 + c^2$", "$a^2 = b^2 + c^2 - 2bc\\cos(A)$", "$\\sin^2(A) + \\cos^2(A) = 1$"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "In the fourth quadrant, which of the primary trigonometric functions are positive?",
      "options": ["Sine and Cosine", "Tangent and Sine", "Cosine and Secant", "Sine and Cosecant"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "What is the amplitude of the function $y = 3\\cos(x)$?",
      "options": ["1", "2", "3", "$\\pi$"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "The value of $\\sec(\\theta)$ is equal to:",
      "options": ["$1/\\sin(\\theta)$", "$1/\\cos(\\theta)$", "$1/\\tan(\\theta)$", "$\\sin(\\theta)/\\cos(\\theta)$"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What is the value of $\\sin(\\pi)$?",
      "options": ["0", "1", "-1", "undefined"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "The identity $\\tan(A+B)$ equals:",
      "options": ["$(\\tan A + \\tan B) / (1 - \\tan A \\tan B)$", "$(\\tan A - \\tan B) / (1 + \\tan A \\tan B)$", "$\\tan A + \\tan B$", "$\\tan(A) + \\tan(B) / 1 - \\tan(A)\\tan(B)$"],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "If an angle is $270^\\circ$, its equivalent in radians is:",
      "options": ["$\\pi/2$", "$\\pi$", "$3\\pi/2$", "$2\\pi$"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "The value of $\\cot(0)$ is:",
      "options": ["0", "1", "undefined", "$\\infty$"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "What is the phase shift of the function $y = \\cos(x - \\pi/2)$?",
      "options": ["$\\pi/2$ to the left", "$\\pi/2$ to the right", "$\\pi$ to the left", "$\\pi$ to the right"],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "What is the value of $\\sin(45^\\circ)$?",
      "options": ["$1/2$", "$\\sqrt{3}/2$", "$1/\\sqrt{2}$", "1"],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "The identity $\\cos(2\\theta)$ is equal to:",
      "options": ["$2\\sin\\theta\\cos\\theta$", "$\\cos^2\\theta - \\sin^2\\theta$", "$1-2\\sin^2\\theta$", "Both B and C"],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "In a right triangle, the side opposite to the right angle is called the:",
      "options": ["Adjacent", "Hypotenuse", "Opposite", "Leg"],
      "correctAnswerIndex": 1
    }
  ]
},
{
    "topic": "Web Development",
    "questions": [
      {
        "questionText": "What does HTML stand for?",
        "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which tag is used to create a hyperlink?",
        "options": ["<a>", "<link>", "<href>", "<url>"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What does CSS stand for?",
        "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which property is used to change the background color?",
        "options": ["color", "bgcolor", "background-color", "background"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "How do you include an external JavaScript file?",
        "options": ["<script href='file.js'>", "<script src='file.js'>", "<js src='file.js'>", "<script name='file.js'>"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of the 'DOCTYPE' declaration?",
        "options": ["To define the type of document", "To inform the browser about the document type", "To specify the HTML version", "All of the above"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which CSS property is used to control the spacing between letters?",
        "options": ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of the following is a CSS framework?",
        "options": ["Django", "React", "Bootstrap", "Express"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the correct way to declare a JavaScript variable?",
        "options": ["variable myVar;", "var myVar;", "v myVar;", "let myVar;"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What does the `<img>` tag require?",
        "options": ["A `src` attribute", "An `alt` attribute", "Both `src` and `alt` attributes", "A `href` attribute"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which HTTP method is used to retrieve data from a server?",
        "options": ["POST", "PUT", "DELETE", "GET"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What is the 'box model' in CSS?",
        "options": ["A design pattern for layouts", "A model that describes how an element's dimensions are calculated", "A type of HTML tag", "A CSS animation technique"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of the `<head>` tag?",
        "options": ["To contain the main content of the document", "To define the header for a section", "To contain metadata about the document", "To contain the navigation links"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "How do you create a function in JavaScript?",
        "options": ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of the following is a back-end framework?",
        "options": ["Vue.js", "Angular", "React", "Express.js"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What is the purpose of the `alt` attribute in an `<img>` tag?",
        "options": ["To provide a tooltip", "To specify the image's source", "To provide alternative text for screen readers or if the image fails to load", "To change the image's size"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "Which tag is used for the main content of a webpage?",
        "options": ["<header>", "<body>", "<footer>", "<main>"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the difference between `==` and `===` in JavaScript?",
        "options": ["`==` compares value, `===` compares value and type", "They are the same", "`==` compares type, `===` compares value", "There is no difference"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of the following is a database?",
        "options": ["HTML", "CSS", "MySQL", "JavaScript"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the purpose of a 'responsive' web design?",
        "options": ["To make the website load faster", "To make the website accessible on different devices and screen sizes", "To improve the website's SEO", "To add animations to the website"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the latest version of HTML?",
        "options": ["HTML4", "HTML5", "XHTML", "HTML 2.0"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which tag is used to create an ordered list?",
        "options": ["<ul>", "<ol>", "<list>", "<li>"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'CORS' error?",
        "options": ["A server-side error", "A security feature that prevents a webpage from making requests to a different domain", "A CSS rendering error", "A JavaScript syntax error"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of the `<meta>` tag?",
        "options": ["To define a paragraph", "To define metadata about an HTML document", "To define a table", "To define a navigation bar"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the difference between `let` and `const`?",
        "options": ["`let` can be reassigned, `const` cannot", "`const` can be reassigned, `let` cannot", "They are the same", "`let` is block-scoped, `const` is not"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which tag is used for a section of a webpage that contains navigation links?",
        "options": ["<main>", "<header>", "<nav>", "<footer>"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the purpose of `git`?",
        "options": ["A social media platform", "A version control system", "A programming language", "A web browser"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which CSS selector targets an element with the ID 'myId'?",
        "options": [".myId", "#myId", "*myId", "myId"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of an API?",
        "options": ["To connect a front-end to a back-end", "To create a website layout", "To manage a database", "To style a website"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'CDN'?",
        "options": ["Content Delivery Network", "Content Download Network", "Code Development Network", "Cloud Development Network"],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "topic": "IoT",
    "questions": [
      {
        "questionText": "Which of the following is a common communication protocol for IoT?",
        "options": ["HTTP", "SMTP", "MQTT", "FTP"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the main purpose of an IoT gateway?",
        "options": ["To power IoT devices", "To provide a connection between local IoT devices and the cloud", "To display data from sensors", "To run an operating system"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which type of sensor is used to measure temperature?",
        "options": ["Accelerometer", "Gyroscope", "Thermocouple", "Pressure sensor"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is a 'thing' in the context of IoT?",
        "options": ["A physical object with embedded sensors and software", "A virtual object in the cloud", "A piece of data", "An application on a smartphone"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of these is a low-power, wide-area network (LPWAN) technology?",
        "options": ["Wi-Fi", "Bluetooth", "LoRaWAN", "Ethernet"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the primary concern for IoT security?",
        "options": ["Slow internet speed", "Lack of interoperability", "Data privacy and unauthorized access", "High power consumption"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What does the term 'M2M' stand for?",
        "options": ["Machine-to-Machine", "Man-to-Machine", "Machine-to-Man", "Mobile-to-Machine"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which cloud provider offers an IoT platform?",
        "options": ["Google Cloud IoT Core", "Microsoft Azure IoT Hub", "Amazon Web Services (AWS) IoT", "All of the above"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What is an 'actuator' in an IoT system?",
        "options": ["A device that measures a physical property", "A device that performs a physical action", "A type of microcontroller", "A communication protocol"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'Digital Twin' in IoT?",
        "options": ["A physical copy of an IoT device", "A virtual model of a physical object or system", "A networking protocol", "A type of sensor"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which programming language is commonly used for embedded systems in IoT?",
        "options": ["Python", "Java", "C/C++", "JavaScript"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is a 'Smart Grid'?",
        "options": ["A network of smart speakers", "An electricity supply network that uses digital communication technology", "A type of smart home device", "A network of traffic lights"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the role of an 'edge device' in IoT?",
        "options": ["To collect and process data locally before sending it to the cloud", "To serve as a central server for all devices", "To provide internet connectivity", "To run complex AI algorithms in the cloud"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which wireless technology is most suitable for short-range communication in a smart home?",
        "options": ["LoRaWAN", "Wi-Fi", "Cellular (5G)", "Zigbee"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What does 'SaaS' stand for in the context of IoT?",
        "options": ["Sensor as a Service", "Software as a Service", "System as a Service", "Security as a Service"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'middleware' in an IoT architecture?",
        "options": ["Software that sits between applications and the operating system", "The physical hardware of a device", "A type of sensor", "A user interface"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which protocol is based on HTTP and is designed for low-power devices?",
        "options": ["MQTT", "AMQP", "CoAP", "DDS"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the primary role of an accelerometer in an IoT device?",
        "options": ["To measure light intensity", "To measure acceleration and orientation", "To measure sound levels", "To measure humidity"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'SCADA' system?",
        "options": ["A type of sensor", "A system for monitoring and controlling industrial processes", "A communication protocol", "A cloud computing service"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'mesh network' in IoT?",
        "options": ["A network where all devices connect to a central hub", "A network where each device can connect to other devices in the network", "A network with a single device", "A network that only uses Wi-Fi"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the role of a 'broker' in an MQTT system?",
        "options": ["To publish messages", "To subscribe to messages", "To receive and route messages between publishers and subscribers", "To encrypt messages"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "Which component is responsible for data visualization in an IoT system?",
        "options": ["Sensor", "Actuator", "Cloud platform", "Gateway"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is 'NB-IoT'?",
        "options": ["A new type of Wi-Fi", "A low-power wide-area network (LPWAN) technology", "A new cloud platform for IoT", "A type of sensor"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which of these is not a layer in a typical IoT architecture?",
        "options": ["Perception layer", "Network layer", "Application layer", "UI/UX layer"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What is the purpose of 'firmware' in an IoT device?",
        "options": ["The user interface", "The operating system and basic code that controls the hardware", "The communication protocol", "The cloud platform"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'BLE' device?",
        "options": ["Bluetooth Low Energy", "Basic Logic Engine", "Broadcast Link Ethernet", "Binary Logic Element"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'big data' in the context of IoT?",
        "options": ["A large amount of data collected from IoT devices", "A type of database", "A programming language", "A sensor technology"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What does the term 'telemetry' refer to in IoT?",
        "options": ["The process of sending data from a remote location to a central point", "The process of controlling a device remotely", "The process of securing data", "The process of connecting devices to the internet"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which communication protocol is a publish/subscribe model?",
        "options": ["HTTP", "MQTT", "CoAP", "DDS"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the main goal of IoT?",
        "options": ["To make devices faster", "To make devices smaller", "To connect physical objects to the internet for data exchange and control", "To create new programming languages"],
        "correctAnswerIndex": 2
      }
    ]
  },
  {
    "topic": "AI",
    "questions": [
      {
        "questionText": "What is 'Machine Learning'?",
        "options": ["A subfield of AI focused on making machines learn from data", "A type of robot", "A programming language", "A type of database"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of these is a type of supervised learning?",
        "options": ["Clustering", "Reinforcement Learning", "Classification", "Dimensionality Reduction"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is a 'Neural Network'?",
        "options": ["A database for AI", "A set of algorithms modeled after the human brain", "A type of programming language", "A cloud computing service"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What does the term 'overfitting' mean in machine learning?",
        "options": ["When a model learns the training data too well, including its noise", "When a model is too simple to capture the underlying trend", "When a model is trained on too little data", "When a model is trained for too long"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which algorithm is a type of unsupervised learning?",
        "options": ["Linear Regression", "Decision Tree", "K-Means Clustering", "Support Vector Machine"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is 'Reinforcement Learning'?",
        "options": ["Learning from labeled data", "Learning through trial and error with rewards and penalties", "Learning to classify data", "Learning to predict a continuous value"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of an 'activation function' in a neural network?",
        "options": ["To determine which neuron to fire next", "To introduce non-linearity into the model", "To control the learning rate", "To calculate the error"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which of these is a common metric for evaluating classification models?",
        "options": ["Mean Squared Error (MSE)", "R-squared", "Accuracy", "Root Mean Squared Error (RMSE)"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is 'Natural Language Processing' (NLP)?",
        "options": ["A subfield of AI that deals with computer vision", "A subfield of AI that focuses on the interaction between computers and human language", "A type of neural network", "A type of database"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'chatbot'?",
        "options": ["A type of sensor", "An AI program that conducts a conversation via auditory or textual methods", "A robot that cleans floors", "A type of programming language"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'feature' in machine learning?",
        "options": ["A column in a dataset", "A row in a dataset", "A type of algorithm", "An output variable"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which of these is a deep learning framework?",
        "options": ["Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'loss function'?",
        "options": ["A function that measures the performance of an algorithm", "A function that calculates the learning rate", "A function that activates a neuron", "A function that processes data"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is the 'Turing Test'?",
        "options": ["A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human", "A test to measure a computer's processing speed", "A test to check a program for bugs", "A test to measure a robot's physical strength"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'Computer Vision'?",
        "options": ["A subfield of AI that enables computers to interpret and understand visual data", "A type of display technology", "A programming language for graphics", "A type of camera"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'supervised learning'?",
        "options": ["Learning with labeled data", "Learning with unlabeled data", "Learning through rewards", "Learning from a teacher"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'unsupervised learning'?",
        "options": ["Learning with labeled data", "Learning with unlabeled data", "Learning through rewards", "Learning from a teacher"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the role of 'data preprocessing'?",
        "options": ["To prepare data for use with a machine learning model", "To train a model", "To deploy a model", "To visualize data"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'decision tree'?",
        "options": ["A type of neural network", "A supervised learning algorithm that is a tree-like model of decisions", "An unsupervised learning algorithm", "A type of database"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the 'learning rate' in a neural network?",
        "options": ["The speed at which a neuron fires", "A hyperparameter that controls how much the model's weights are adjusted with respect to the loss gradient", "The number of layers in the network", "The size of the dataset"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'deep neural network'?",
        "options": ["A neural network with a single hidden layer", "A neural network with many hidden layers", "A type of convolutional neural network", "A neural network with no hidden layers"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is 'bias' in a machine learning model?",
        "options": ["A preference for a particular outcome", "A measure of how far off the predictions are from the true values", "The number of features in a dataset", "The weight of a neuron"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'reinforcement learning agent'?",
        "options": ["A piece of software that learns to make decisions in an environment to maximize a reward", "A type of robot", "A type of sensor", "A type of database"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which algorithm is a type of regression?",
        "options": ["K-Means Clustering", "Logistic Regression", "Principal Component Analysis", "Decision Tree Classifier"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of 'validation data'?",
        "options": ["To train the model", "To test the model's performance on unseen data during training", "To fine-tune hyperparameters", "To deploy the model"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is 'sentiment analysis'?",
        "options": ["Analyzing an image for objects", "Determining the emotional tone behind a body of text", "Detecting fraud in financial transactions", "Predicting stock prices"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is an 'AI ethics'?",
        "options": ["A branch of computer science", "A field that studies the moral issues of AI", "A type of programming language", "A type of database"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'supervised learning' algorithm?",
        "options": ["An algorithm that learns from labeled data", "An algorithm that learns from unlabeled data", "An algorithm that learns through trial and error", "An algorithm that learns from a teacher"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'computer vision' used for?",
        "options": ["To analyze text", "To analyze images and videos", "To analyze audio", "To analyze data"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'dataset'?",
        "options": ["A collection of data points", "A single data point", "A type of algorithm", "A type of neural network"],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "topic": "Digital Electronics",
    "questions": [
      {
        "questionText": "What is a 'transistor'?",
        "options": ["A passive component that stores charge", "A semiconductor device used to amplify or switch electronic signals and electrical power", "A resistor", "A type of battery"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "Which of these is a basic logic gate?",
        "options": ["NOR", "XOR", "NOT", "All of the above"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What does 'CMOS' stand for?",
        "options": ["Complementary Metal-Oxide Semiconductor", "Computer Main Operating System", "Common Mode Output Signal", "Central Microprocessor Operations System"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'flip-flop'?",
        "options": ["A logic gate", "A type of sensor", "A sequential logic circuit that can store one bit of data", "A type of resistor"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is the binary representation of the decimal number 10?",
        "options": ["1010", "1100", "0101", "1001"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'multiplexer'?",
        "options": ["A circuit that combines multiple input signals into a single output", "A circuit that takes a single input and distributes it to multiple outputs", "A circuit that stores data", "A type of amplifier"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is the output of an 'AND' gate if both inputs are 1?",
        "options": ["0", "1", "undefined", "error"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What does 'IC' stand for?",
        "options": ["Integrated Circuit", "Internal Circuit", "In-Circuit", "Integrated Component"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'register' in a digital circuit?",
        "options": ["A type of memory that holds a single data bit", "A type of memory that holds a group of bits", "A type of logic gate", "A type of amplifier"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'decoder'?",
        "options": ["A circuit that converts a binary code into multiple output signals", "A circuit that converts multiple input signals into a binary code", "A circuit that stores data", "A type of amplifier"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "Which logic gate is known as a universal gate?",
        "options": ["AND", "OR", "XOR", "NAND"],
        "correctAnswerIndex": 3
      },
      {
        "questionText": "What is the purpose of a 'clock signal' in a sequential circuit?",
        "options": ["To provide power to the circuit", "To synchronize the operations of the circuit", "To amplify the signal", "To store data"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the hexadecimal equivalent of the decimal number 15?",
        "options": ["A", "E", "F", "15"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is a 'counter'?",
        "options": ["A device that stores a binary number", "A sequential circuit that counts clock pulses", "A type of logic gate", "A type of amplifier"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is 'combinational logic'?",
        "options": ["A type of circuit where the output depends on the present input values", "A type of circuit where the output depends on the present and past input values", "A type of memory", "A type of amplifier"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is the output of a 'NOT' gate if the input is 1?",
        "options": ["0", "1", "undefined", "error"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'sequential logic'?",
        "options": ["A type of circuit where the output depends on the present input values", "A type of circuit where the output depends on the present and past input values", "A type of memory", "A type of amplifier"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What does a 'full adder' circuit do?",
        "options": ["It adds two single-bit binary numbers", "It adds two single-bit binary numbers and a carry-in bit", "It subtracts two single-bit binary numbers", "It multiplies two single-bit binary numbers"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the hexadecimal equivalent of the binary number 1111?",
        "options": ["A", "E", "F", "15"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What is a 'shift register'?",
        "options": ["A type of logic gate", "A sequential logic circuit that shifts its stored bits", "A type of counter", "A type of memory that stores a single bit"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is 'Boolean algebra'?",
        "options": ["A branch of algebra dealing with matrices", "A system of algebra for dealing with binary variables", "A system of algebra for dealing with complex numbers", "A system of algebra for dealing with vectors"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the output of an 'OR' gate if both inputs are 0?",
        "options": ["0", "1", "undefined", "error"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is the purpose of a 'Schmitt trigger'?",
        "options": ["To convert a square wave to a sine wave", "To convert a noisy signal into a clean digital signal", "To amplify a signal", "To store a bit of data"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is a 'microcontroller'?",
        "options": ["A large computer", "A small computer on a single integrated circuit", "A type of sensor", "A type of battery"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is 'gray code'?",
        "options": ["A binary numeral system where two successive values differ in only one bit", "A type of logic gate", "A type of memory", "A type of amplifier"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is a 'seven-segment display'?",
        "options": ["A device that displays a single number", "A device that displays a letter", "A device that displays a number using seven segments", "A type of sensor"],
        "correctAnswerIndex": 2
      },
      {
        "questionText": "What does 'SRAM' stand for?",
        "options": ["Static Random-Access Memory", "Synchronous Random-Access Memory", "Static Read-Only Memory", "Synchronous Read-Only Memory"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is the hexadecimal equivalent of the decimal number 16?",
        "options": ["10", "A", "B", "16"],
        "correctAnswerIndex": 0
      },
      {
        "questionText": "What is 'sequential logic'?",
        "options": ["A type of circuit where the output depends on the present input values", "A type of circuit where the output depends on the present and past input values", "A type of memory", "A type of amplifier"],
        "correctAnswerIndex": 1
      },
      {
        "questionText": "What is the purpose of an 'encoder'?",
        "options": ["A circuit that converts a binary code into multiple output signals", "A circuit that converts multiple input signals into a binary code", "A circuit that stores data", "A type of amplifier"],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "topic": "Assembly Language Programming",
    "questions": [
      {
        "questionText": "What is the primary function of an assembler?",
        "options": ["To convert high-level language to machine code", "To convert assembly language to machine code", "To convert machine code to assembly language", "To execute assembly language programs"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which type of addressing mode is used when the operand is specified directly in the instruction?",
        "options": ["Register addressing", "Direct addressing", "Immediate addressing", "Indexed addressing"],
        "correctAnswerIndex": 2,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is a 'label' in assembly language?",
        "options": ["A data type", "A symbolic name for a memory location", "A type of instruction", "A constant value"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "The mnemonic 'MOV' stands for:",
        "options": ["Move", "Multiply", "Modulo", "Monitor"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "What does a 'branch' instruction do?",
        "options": ["It moves data between registers", "It transfers control to a different part of the program", "It performs an arithmetic operation", "It loads data from memory"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the purpose of the 'stack' in assembly programming?",
        "options": ["To store permanent data", "To store return addresses for subroutines and local variables", "To perform arithmetic operations", "To store all program instructions"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which addressing mode uses a base register plus an offset to calculate the effective address?",
        "options": ["Direct addressing", "Register addressing", "Indexed addressing", "Base-relative addressing"],
        "correctAnswerIndex": 3,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is a 'macro' in assembly language?",
        "options": ["A large instruction", "A sequence of instructions that is assigned a name and can be invoked with that name", "A data structure", "A type of register"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "The 'JMP' instruction is an example of a:",
        "options": ["Conditional jump", "Unconditional jump", "Register-relative jump", "Direct jump"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the primary difference between a 'jump' and a 'call' instruction?",
        "options": ["A jump saves the return address, a call does not", "A call saves the return address, a jump does not", "A jump is conditional, a call is not", "A call is used for loops, a jump is not"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What does the 'PUSH' instruction do?",
        "options": ["It loads data into a register", "It saves the contents of a register onto the stack", "It retrieves data from the stack", "It performs an addition operation"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "The 'POP' instruction is the inverse of the 'PUSH' instruction. What does it do?",
        "options": ["Saves a value to the stack", "Retrieves a value from the stack", "Adds a value to the stack", "Deletes a value from the stack"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "In a subroutine, what instruction is typically used to return to the main program?",
        "options": ["RET", "JMP", "CALL", "INT"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is an 'interrupt' in the context of assembly programming?",
        "options": ["A software error", "A signal that causes the CPU to temporarily halt its current task", "A type of loop", "A data structure"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the purpose of an 'interrupt service routine' (ISR)?",
        "options": ["To handle keyboard input", "To handle a specific interrupt", "To perform a mathematical calculation", "To manage memory"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which type of instruction set architecture (ISA) has a large number of instructions?",
        "options": ["RISC (Reduced Instruction Set Computer)", "CISC (Complex Instruction Set Computer)", "VLIW (Very Long Instruction Word)", "DSP (Digital Signal Processor)"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which of the following is a pseudo-instruction?",
        "options": ["MOV", "ADD", "DB (Define Byte)", "JMP"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the purpose of the 'EQU' directive?",
        "options": ["To define a new instruction", "To equate a symbolic name with a constant value", "To define a data block", "To start a new section of code"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What does a linker do in the assembly language development process?",
        "options": ["It converts the assembly code to machine code", "It combines multiple object files into a single executable file", "It loads the program into memory", "It debugs the program"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is 'self-modifying code'?",
        "options": ["Code that is written by a computer", "Code that can change its own instructions during execution", "Code that is executed in a loop", "Code that is optimized by the assembler"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "Which type of addressing mode is most flexible but also most complex?",
        "options": ["Immediate addressing", "Direct addressing", "Indirect addressing", "Indexed addressing with base"],
        "correctAnswerIndex": 3,
        "difficulty": "Hard"
      },
      {
        "questionText": "The instruction 'ADD AX, BX' is an example of which addressing mode for the source operand (BX)?",
        "options": ["Immediate addressing", "Register addressing", "Direct addressing", "Indirect addressing"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is an 'opcode'?",
        "options": ["The part of an instruction that specifies the operation to be performed", "The operand of an instruction", "A type of register", "A memory address"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "The term 'operand' refers to:",
        "options": ["The operation to be performed", "The data on which an operation is performed", "A type of memory", "A specific register"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the purpose of the 'HLT' instruction?",
        "options": ["To perform a jump", "To halt the execution of the program", "To load data into a register", "To clear a register"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is 'pipelining' in a CPU?",
        "options": ["Executing a single instruction faster", "Executing multiple instructions simultaneously in different stages", "A type of memory management", "A type of interrupt handling"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the function of the 'NOP' instruction?",
        "options": ["It performs a complex operation", "It does nothing and serves as a time delay", "It is used for branching", "It loads data from memory"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is a 'compiler'?",
        "options": ["A program that converts a high-level language into machine code", "A program that converts assembly language into machine code", "A program that executes code line by line", "A program that links object files"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the advantage of using macros?",
        "options": ["They make the code run faster", "They reduce the size of the executable file", "They make the code more readable and reduce repetition", "They are easier to debug"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the purpose of the 'END' directive?",
        "options": ["To halt the program execution", "To mark the end of the program", "To define a data segment", "To define a code segment"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      }
    ]
  },
  {
    "topic": "Microprocessor 8085",
    "questions": [
      {
        "questionText": "How many address lines does the 8085 microprocessor have?",
        "options": ["8", "16", "32", "64"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "The 8085 is an 8-bit microprocessor, which means:",
        "options": ["It has an 8-bit address bus", "It has an 8-bit data bus", "It has 8 registers", "It can perform 8 operations"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which register is the accumulator in the 8085?",
        "options": ["B register", "C register", "A register", "D register"],
        "correctAnswerIndex": 2,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the function of the 'Program Counter' (PC) in the 8085?",
        "options": ["To store the result of an operation", "To hold the address of the next instruction to be executed", "To count the number of instructions", "To store data"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "The 'Stack Pointer' (SP) is a ____-bit register.",
        "options": ["8", "16", "32", "64"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the purpose of the 'READY' signal?",
        "options": ["To indicate that the CPU is ready to execute an instruction", "To indicate that the memory is ready to send or receive data", "To indicate that a peripheral device is ready", "To reset the microprocessor"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which of these is a hardware interrupt of the 8085?",
        "options": ["RST 5.5", "RST 7.5", "TRAP", "All of the above"],
        "correctAnswerIndex": 3,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which instruction is used to load an 8-bit data into the accumulator?",
        "options": ["MOV A, B", "LDA", "MVI A, 8-bit data", "LXI B, 16-bit data"],
        "correctAnswerIndex": 2,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the purpose of the 'ALE' signal?",
        "options": ["Address Latch Enable", "Arithmetic Logic Enable", "Address Link Enable", "Analog Latch Enable"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which signal is used to reset the 8085 microprocessor?",
        "options": ["READY", "HOLD", "RESET IN", "INTR"],
        "correctAnswerIndex": 2,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the role of the 'Address Bus'?",
        "options": ["To carry data to and from memory", "To specify the memory location or I/O port", "To carry control signals", "To carry power to the components"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the size of the instruction set of the 8085?",
        "options": ["74 instructions", "246 instructions", "256 instructions", "80 instructions"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "Which of these is a software interrupt?",
        "options": ["TRAP", "RST 6.5", "RST 7", "RST 7.5"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "The 8085 has a multiplexed address/data bus. What does this mean?",
        "options": ["The same set of pins is used for both address and data", "It can perform both arithmetic and logic operations", "It has separate buses for address and data", "It can handle both 8-bit and 16-bit data"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "The instruction 'HLT' is used to:",
        "options": ["Load data", "Halt the program execution", "Jump to a new address", "Clear the accumulator"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the size of the flag register in the 8085?",
        "options": ["8-bit", "16-bit", "4-bit", "32-bit"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which of the following flags is not present in the 8085?",
        "options": ["Carry Flag", "Zero Flag", "Overflow Flag", "Parity Flag"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the purpose of the 'INTR' pin?",
        "options": ["To request a hardware interrupt", "To hold the CPU", "To reset the CPU", "To enable a device"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "The instruction 'DAD B' performs which operation?",
        "options": ["Add B and A", "Add B to A", "Add the contents of the B-C pair to H-L pair", "Decrement the B register"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is a 'TRAP' interrupt?",
        "options": ["An optional interrupt", "A non-maskable interrupt", "A software interrupt", "A conditional interrupt"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the purpose of the 'HOLD' signal?",
        "options": ["To halt the CPU", "To request the CPU to release the buses", "To reset the CPU", "To initiate an interrupt"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which of the following is a 16-bit register pair?",
        "options": ["B-C", "D-E", "H-L", "All of the above"],
        "correctAnswerIndex": 3,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the function of the 'Control Bus'?",
        "options": ["To carry data", "To specify the memory location", "To carry signals that control the system's operations", "To provide power"],
        "correctAnswerIndex": 2,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which instruction pushes the contents of the accumulator onto the stack?",
        "options": ["PUSH B", "PUSH PSW", "POP B", "POP PSW"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "The 8085 operates at a clock frequency of:",
        "options": ["1 MHz", "3 MHz", "5 MHz", "10 MHz"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the instruction 'LXI H, 2050H' used for?",
        "options": ["To load data into register H", "To load the 16-bit address 2050H into the H-L pair", "To exchange the contents of H and L", "To load data from memory address 2050H"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "The term 'PSW' in the context of the 8085 stands for:",
        "options": ["Program Status Word", "Program Start Word", "Processor Status Word", "Processor Start Word"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the purpose of the 'S0' and 'S1' pins?",
        "options": ["To provide clock signals", "To indicate the type of machine cycle being performed", "To handle interrupts", "To enable the bus"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "Which instruction is used to exchange the contents of the H-L register pair with the stack?",
        "options": ["XCHG", "SPHL", "PCHL", "XTHL"],
        "correctAnswerIndex": 3,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the function of the 'SID' pin?",
        "options": ["Serial Output Data", "Serial Input Data", "Status Input Data", "Status Output Data"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      }
    ]
  },
  {
    "topic": "Digital System and Architecture",
    "questions": [
      {
        "questionText": "What is the binary equivalent of the decimal number 7?",
        "options": ["0110", "0111", "1000", "1100"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which logic gate outputs a '1' only when all inputs are '1'?",
        "options": ["OR", "AND", "XOR", "NOT"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is a 'flip-flop'?",
        "options": ["A combinational circuit that stores one bit of data", "A sequential circuit that stores one bit of data", "A type of logic gate", "An arithmetic circuit"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What does a 'full adder' circuit do?",
        "options": ["Adds two binary digits", "Adds two binary digits and a carry-in bit", "Multiplies two binary digits", "Subtracts two binary digits"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What does 'CPU' stand for?",
        "options": ["Central Processing Unit", "Central Peripheral Unit", "Computer Processing Unit", "Central Power Unit"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which type of memory is volatile and loses its data when power is turned off?",
        "options": ["ROM (Read-Only Memory)", "RAM (Random-Access Memory)", "Hard Drive", "Flash Memory"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is 'pipelining' in a CPU?",
        "options": ["A technique to execute multiple instructions in a single clock cycle", "A technique to execute multiple instructions in parallel stages", "A method for data storage", "A method for power management"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the role of the 'Control Unit' in a CPU?",
        "options": ["To perform arithmetic and logic operations", "To store data", "To direct the flow of data and instructions", "To connect to external devices"],
        "correctAnswerIndex": 2,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is a 'multiplexer'?",
        "options": ["A circuit that selects one of many input signals and routes it to a single output", "A circuit that takes a single input and routes it to multiple outputs", "A circuit that adds multiple signals", "A circuit that multiplies signals"],
        "correctAnswerIndex": 0,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is a 'register'?",
        "options": ["A large block of memory", "A small, high-speed storage location within the CPU", "A type of logic gate", "A type of bus"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the hexadecimal equivalent of the decimal number 11?",
        "options": ["A", "B", "10", "C"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the purpose of an 'interrupt' in a digital system?",
        "options": ["To pause the CPU for a short time", "To allow the CPU to respond to an external event", "To reset the system", "To perform a calculation"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is a 'bus' in computer architecture?",
        "options": ["A large block of memory", "A set of parallel wires that connect various components of a computer", "A type of CPU", "A type of peripheral device"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the main function of the 'Arithmetic Logic Unit' (ALU)?",
        "options": ["To perform arithmetic and logical operations", "To store data", "To control the flow of data", "To handle I/O operations"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is 'Moore's Law'?",
        "options": ["The number of transistors on a microchip doubles approximately every two years", "The speed of a processor doubles every year", "The cost of a computer doubles every two years", "The size of a computer halves every two years"],
        "correctAnswerIndex": 0,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the 'Von Neumann architecture'?",
        "options": ["An architecture where instructions and data are stored in separate memories", "An architecture where instructions and data are stored in the same memory", "An architecture that uses multiple CPUs", "An architecture that uses only one bus"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the difference between a 'microprocessor' and a 'microcontroller'?",
        "options": ["A microprocessor has a CPU only, while a microcontroller integrates a CPU with memory and I/O peripherals", "A microprocessor is faster than a microcontroller", "A microcontroller is more expensive than a microprocessor", "A microprocessor is used in embedded systems, a microcontroller is not"],
        "correctAnswerIndex": 0,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is a 'cache memory'?",
        "options": ["A type of slow, large memory", "A small, fast memory that stores frequently accessed data and instructions", "A type of permanent storage", "A type of optical memory"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is a 'sequential circuit'?",
        "options": ["A circuit whose output depends only on the present input values", "A circuit whose output depends on the present and past input values", "A circuit that performs arithmetic operations", "A circuit that only uses AND gates"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "Which type of logic family is known for low power consumption?",
        "options": ["TTL (Transistor-Transistor Logic)", "ECL (Emitter-Coupled Logic)", "CMOS (Complementary Metal-Oxide Semiconductor)", "NMOS (N-type Metal-Oxide-Semiconductor)"],
        "correctAnswerIndex": 2,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is a 'decoder'?",
        "options": ["A circuit that converts a binary code into multiple output lines", "A circuit that combines multiple inputs into a single output", "A circuit that stores data", "A circuit that amplifies a signal"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is the purpose of a 'clock signal' in a synchronous digital system?",
        "options": ["To provide power", "To synchronize the operations of all components", "To perform arithmetic operations", "To store data"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the main advantage of RISC (Reduced Instruction Set Computer) architecture?",
        "options": ["Complex instructions", "Simple, fast instructions that execute in one clock cycle", "Large number of addressing modes", "High power consumption"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the output of a 'NAND' gate when both inputs are '1'?",
        "options": ["0", "1", "undefined", "error"],
        "correctAnswerIndex": 0,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is a 'micro-operation'?",
        "options": ["A complex instruction", "An elementary operation performed on data stored in registers", "A type of memory", "A type of interrupt"],
        "correctAnswerIndex": 1,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the purpose of a 'counter'?",
        "options": ["To perform arithmetic operations", "To store data", "A sequential circuit that counts a number of clock pulses", "To select one of many inputs"],
        "correctAnswerIndex": 2,
        "difficulty": "Easy"
      },
      {
        "questionText": "What is a 'cache hit'?",
        "options": ["When the requested data is not found in the cache", "When the requested data is found in the cache", "A type of error", "A type of interrupt"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      },
      {
        "questionText": "What is the function of the 'program counter' (PC)?",
        "options": ["To store the result of an operation", "To hold the address of the next instruction to be executed", "To count the number of instructions", "To store data"],
        "correctAnswerIndex": 1,
        "difficulty": "Easy"
      },
      {
        "questionText": "Which type of system uses a common bus for both data and instructions?",
        "options": ["Von Neumann architecture", "Harvard architecture", "RISC architecture", "CISC architecture"],
        "correctAnswerIndex": 0,
        "difficulty": "Hard"
      },
      {
        "questionText": "What is the function of a 'demultiplexer'?",
        "options": ["A circuit that selects one of many inputs", "A circuit that takes a single input and distributes it to multiple outputs", "A circuit that stores data", "A circuit that adds multiple signals"],
        "correctAnswerIndex": 1,
        "difficulty": "Moderate"
      }
    ]
  },
]
};

export default quizData;