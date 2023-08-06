## test was not wrapped in act(...) Warning and Test Failure
n the upcoming lecture, we will be testing simulated user events. When executing the tests you will see this message in your terminal:

"Warning: An update to UserForm inside a test was not wrapped in act(...)"

React Testing Library (RTL) just saw a major v14 update a few weeks ago. Create React App (CRA) has not updated its versions of RTL, so, there are currently some major conflicts with the dependencies that are being installed.

Most importantly, user events are now async:

https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent

To resolve the testing errors in this project and anywhere else in the course that shows user events like user.click, user.keyboard, etc, you'll need to make the test function async:

test("it calls onUserAdd when the form is submitted", async () => {

Then, add the await keyword wherever there is a user action:

await user.click(nameInput);

The act warnings appear to be a bug that was introduced in a v13 RTL update and then fixed with v14. You may choose to ignore the warnings as they should not affect your tests. If you wish to resolve them, you can uninstall the current version of RTL that CRA installed and re-install with the latest versions:
```
npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event

npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

We have included a zip file that contains the updated code and working versions as a zip file to this lecture as well as the Simulating User Events lecture.

Again, as a reminder, this guidance will apply to all usages of user events throughout the course.

Complete **UserForm.test.js**

```js
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
 
test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
 
  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
 
  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
 
test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION
  // Try to render my component
  render(<UserForm />);
 
  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");
 
  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");
 
  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");
 
  // Find the button
 
  // Simulate clicking the button
 
  // Assertion to make sure 'onUserAdd' gets called with email/name
});
```

Use the `simple.zip` file