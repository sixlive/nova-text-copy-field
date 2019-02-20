import filterField from "../../filterField";

describe("filterField", () => {
    it("It will truncate a field", () => {
        const filtered = filterField({
            value: "Example Value",
            truncate: 4
        });

        expect(filtered).toBe("Exam...");
    });

    it("It will mask a field", () => {
        const filtered = filterField({
            value: "Example Value",
            masked: true,
            masked_character: "X"
        });

        expect(filtered).toBe("XXXXXXXXXXXXX");
    });

    it("It will mask and truncate a field", () => {
        const filtered = filterField({
            value: "Example Value",
            truncate: 4,
            masked: true,
            masked_character: "X"
        });

        expect(filtered).toBe("XXXXXXX");
    });
});
