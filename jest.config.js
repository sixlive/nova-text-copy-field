module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/resources/assets/js/components/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testPathIgnorePatterns: [
            "/node_modules/",
            "/vendor/"
        ],
  testURL: "http://localhost/"
};
