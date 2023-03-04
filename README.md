# Book Library Web Application

  This is a web application for a book library made using React, HTML, CSS, and JavaScript. The application is fully responsive and allows users to search for books by title or author name, and view information about them.



## Tech Stack

**Client:** React, HTML, CSS, JavaScript




## Installation

To run this Project

```bash
  1. Clone the repository to your local machine.
       git clone https://github.com/happy-jays/BooksLibrary_WebApp.git
  2. Navigate to the project directory
  3. Install the dependencies
       npm install
       or
       yarn install
  4. Start the development server
      npm start
      or
      yarn start
  5. Open your browser and navigate to http://localhost:3000
```
## Features
    1. Design : The book library app uses the Open Library Subjects and Search APIs to fetch information about books. The Subjects API is used to retrieve the predefined list of 5 popular subjects, while the Search API is used to search for books by title or author name.
    
    2. Search : The home page of the Library app has a search box that allows users to search for books by title or author name. The search key is visible in the search box, and there is a way to clear the searched text. Not more than 10 search results are retrieved in one go using offset and limit, and there is a way to view the Next set of search results and similarly also be able to view the Previous page results.

    3. Popular Subjects : A predefined list of 5 subjects is present on the Home page. Clicking on a subject routes the user to a /<subject> URL, which lists the top 10 books on the subject.

## API Used
    Subjects API
      The Subjects API is used to retrieve the list of popular subjects. The documentation for this API can be found at https://openlibrary.org/dev/docs/api/subjects.

    Search API
      The Search API is used to search for books by title or author name. The documentation for this API can be found at https://openlibrary.org/dev/docs/api/search.

## Desktop Screenshots

![localhost_3000_ (5)](https://user-images.githubusercontent.com/56588611/222823042-e606763e-856c-4adf-9611-36cf1424b5fe.png)

## Mobile Screenshots

<img src="https://user-images.githubusercontent.com/56588611/222823077-938604ca-3ad3-48ba-8545-29ccf96219c8.png" width="400" height="800">
