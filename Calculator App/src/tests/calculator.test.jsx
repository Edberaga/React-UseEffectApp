import { test, expect, afterEach} from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

afterEach(() => {
    cleanup();
})
test("calculate addition", async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "+");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "3");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("3");
    });

    userEvent.click(screen.getByRole("button", { name: "="}));

    await waitFor(() => 
        expect(screen.getByPlaceholderText("Result").value).toBe("8")
    );
});

test("Subtraction test", async () => {
    render(<Calculator/>);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "-");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "3");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("3");
    });
    
    userEvent.click(screen.getByRole("button", { name: "="}));
    
    await waitFor(() => 
        expect(screen.getByPlaceholderText("Result").value).toBe("2")
    );
})

test("multiplication test", async () => {
    render(<Calculator/>);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "*");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "3");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("3");
    });
    
    userEvent.click(screen.getByRole("button", { name: "="}));
    
    await waitFor(() => 
        expect(screen.getByPlaceholderText("Result").value).toBe("15")
    );
})

test("Division test", async () => {
    render(<Calculator/>);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "10");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("10");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "/");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "2");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("2");
    });
    
    userEvent.click(screen.getByRole("button", { name: "="}));
    
    await waitFor(() => 
        expect(screen.getByPlaceholderText("Result").value).toBe("5")
    );
})