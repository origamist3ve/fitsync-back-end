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


![Users_Feed](https://github.com/user-attachments/assets/dee1ff65-00d4-4062-ac36-8a3bc878c7fc)

# Wireframe
- ![Landing_Page](https://github.com/user-attachments/assets/d909134a-ec97-4a18-ae29-fbec39eabdee)
- ![Registration_Profile](https://github.com/user-attachments/assets/a53b3c47-a72f-4d0c-ac31-8a3efed67ea3)
- ![Dashboard](https://github.com/user-attachments/assets/4104cd48-0aa4-4858-9d03-5fb1d09e04d0)
- ![Specific_Workout](https://github.com/user-attachments/assets/e7a450dd-6288-4fbf-bf44-273cc8afba84)
- ![Add_Workout](https://github.com/user-attachments/assets/cc524b8c-e4a6-4b85-8b7b-cc0d1adacd14)
- ![Users_Feed](https://github.com/user-attachments/assets/2635dd7c-6527-4332-891a-c7382d03ddbc)

- 










