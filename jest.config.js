// jest.config.js (javascript file)
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
    testMatch: [
        "<rootDir>/src/**/*.spec.ts"
    ],
    collectCoverage: true,
    roots: ["<rootDir>/src/"]

};
