# Description
Fit-sync is an app that allows users to track their workouts, share their workouts and learn from others. Users also have the option of liking and commenting on someone else’s workout. Fit Sync is perfect for busy individuals or those starting out on their fitness journey.

# MVP's
- As a user I want to be able to see a landing page so that I know I am on the main page of the app
- As a user I want to be able to register so that I can verify myself as a user
- As a user I want to be able to log in to my account so that I can access the features of the app
- As a user I want to be able to see my personal dashboard where I can view and create new workouts
- As a user, I want to be able to create a new workout so that I can post it to my dashboard
- As a user, I want to be able to edit my workout so that I could change the information
- As a user I want to be able to delete my workout
- As a user, I want to be able to see a feed where I can see the workouts of other users
- As a user,I want to be able to like and comment other users workouts
- As a user, I want to be able to customize my profile so that I can add my personal information

# Stretch goals
- As a user, I want to be able to see the progress of my health so that I know that the workouts affect my progress
- As a user, I want to Comment on someones comment so that I can reply to other users' comments
- As a user, I want to be able to access query recommended workouts.

# Routes

| **Route**                             | **Method** | **Description**                    |
| ------------------------------------- | ---------- | ---------------------------------- |
| `/`                                   | GET        | Show the landing page              |
| `/register`                           | GET        | Show user registration form        |
| `/register`                           | POST       | Register a new user                |
| `/login`                              | GET        | Show login form                    |
| `/login`                              | POST       | Authenticate user & start session  |
| `/logout`                             | GET        | Log out and destroy session        |
| `/dashboard`                          | GET        | Show user’s teams                  |
| `/dashboard/workouts/new`             | GET        | Show form to create a workout      |
| `/dashboard/workouts`                 | POST       | Create a new workout               |
| `/dashboard/workouts/:workoutId`      | GET        | View workout details               |
| `/dashboard/workouts/:workoutId/edit` | UPDATE     | Show edit form for workouts        |
| `/dashboard/workouts/:workoutId`      | DELETE     | Delete a workout                   |
| `/feed`                               | GET        | Display the users workouts feed    |
| `/feed/:workoutId`                    | GET        | Display the specific users workout |
| `/feed/:workoutId`                    | POST       | Post a comment to the feed         |
| `/feed/:workoutId`                    | EDIT       | Edit the comment                   |

# Component Hierarchy 
<img width="1018" alt="Hierarchy_Diagram" src="https://github.com/user-attachments/assets/27805d28-6335-45d9-858a-b2fd5021c1da" />

# ERD
![Fitness_Tracker_ERD](https://github.com/user-attachments/assets/0195dd6a-158d-4d61-9fa0-7f0572e5b749)



# Wireframe
[users Feed](https://github.com/user-attachments/assets/4559a88d-d6c9-41f3-999f-c3c2413bd192)











