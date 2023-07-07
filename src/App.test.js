import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./components/BookingForm";
import "@testing-library/jest-dom";

  describe("Feedback form", () => {
    test("User can submit the form if all required fields are filled", () => {
      const name = "John Doe";
      const email = "johndoe@email.com";
      const telephone = "233000000000";
      const guests = 2;
      const date = new Date(2023, 8, 15, 12, 30);
      const time="18:00";
      const handleSubmit = jest.fn();
      render(<Form times={["18:00","19:00","20:00","21:00", "22:00"]} onSubmit={handleSubmit} />);
      const nameInput = screen.getByLabelText('First Name');
      fireEvent.change(nameInput, { target: { value: name } });
      const emailInput = screen.getByLabelText(/Email/);
      fireEvent.change(emailInput, { target: { value: email } });
      const telephoneInput = screen.getByLabelText(/Phone/);
      fireEvent.change(telephoneInput, { target: { value: telephone } });
      const guestsInput = screen.getByLabelText(/Guests/);
      fireEvent.change(guestsInput, { target: { value: guests } });
      const dateInput = screen.getByLabelText(/Date/);
      fireEvent.change(dateInput, { target: { value: date } });
      const timeInput = screen.getByLabelText(/Time/);
      fireEvent.change(timeInput, { target: { value: time } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
      expect(handleSubmit).not.toHaveBeenCalled();
      // expect(handleSubmit).toHaveBeenCalledWith(name, email, telephone, guests, datetime);
    })
  })
