###PETFUL-SHOP-CLIENT####


##FULLSTACK APP, implemented BY Christopher-Xavier involving NODE.JS, EXPRESS, REACT, POSTGRESQL,

User stories

##USER STORY #1:
As a pet lover, I want to visit the FIFO pet adoption site 
so that I can get more information about the adoption process.

##Acceptance criteria

When I go to the FIFO adoption agency site

* I see a description of the adoption process.
* I see a meaningful picture related to the description.
* I see a button for starting the adoption process.

##USER STORY #2:

As a user interested in adopting pets, I want to get more information 
on each pet so that I can make an informed decision about who to adopt.

Acceptance criteria

When I visit the adoption page, I can see:

* An image of the pet;
* A physical description of the pet;
* The pet's name, gender, age, and breed.
* A story of the pet's journey to the shelter

##USER STORY #3:
As a user interested in adopting pets, 
I want to see the pets that I can adopt.

Acceptance criteria

When I visit the adoption page, I can only see the 
pet that is next in line to be adopted.

##USER STORY #4:
As a user interested in adopting pets, I want to get in line to adopt.

Acceptance criteria

When I visit the adoption page:

* I can see a list of other people currently in line.
* I can submit my name and be added to the end of the line.
* When I am not at the beginning of the line, I cannot see an option to adopt a pet.
* For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.               * Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
  * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.


##USER STORY #5:


As a user interested in adopting pets, I want to adopt a pet.

Acceptance criteria

When I am at the front of the line:

* I can see an option to adopt a pet.
* When I choose to adopt a pet: 
    * I see a confirmation that I have adopted the pet.
    * I see my name removed from the line.
    * I see the pet I adopted is removed from view and replaced with another pet.
Helpful starting point
This app will use 2 distinct repositories: 1 for the client, and 1 for the server.

Create the parent directory for your app on your local machine: mkdir Petful.
Move into the directory: cd Petful.
Set up the client and the server
Clone the server template repository:

git clone https://github.com/tparveen/DSA-Petful.git
Push your changes up to GitHub

Create and test API endpoints
Your app should be able to show us the cat or dog that has been in the shelter the longest, and also be able to remove an animal from the shelter after it has been adopted. This will require GETing the pet information to show and and DELETEing, the pet from the shelter when it is adopted.

Other requirements
Use a Queue data structure that is implemented with either a singly linked list or doubly linked list.
Deploy your client using Vercel
Deploy your server using Heroku
Test the functionality of your code often! Make incremental changes and see that they're working in the browser before you move on.
Apply the same approach to accessibility. Resolve any accessibility warnings your linter generates, and run aXe when you write new markup and styles.
