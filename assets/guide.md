open with sign up page
if **sign in** pressed, go to sign in page( and change accordingly ) -> done
if **sign up** pressed, go to sign up page( and change accordingly ) -> done

    Sign up Page :
    an object storing the name, email, password -> userDetails
    1. Enter Name
        check the length of name and check if already exists
    2. Enter Email
        check for validation && check if exist already 
    3. Enter Password and confirm Password
        check the password size and validation
        match passwords
    4. Check the checkbox
        check if checked or not
    5. Pressing the sign up button
        store the object in locastorage and then upload to it firebase
        move to feature page and include the username to feature section.
    6. Next And Prev
        How to handle **next** and **prev** -> just update classes
        ( name , email, password, checkbox )


    Sign In Page :
    store the enter username and password
    add length validation but not the existing validation
    and no validation on password

    **Sign In Button** -> on press 
    call firebase function to signin 