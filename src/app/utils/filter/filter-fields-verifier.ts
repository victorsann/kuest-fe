function filterFieldsVerifier(value: unknown): boolean {
    if (value == null) {
        return false; // null or undefined
    }

    if (typeof value === "string") {
        return value.trim().length > 0;
    }

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    return true;
}

export default filterFieldsVerifier;