/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [{ name: "main" }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["docs/CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version}\n\n[skip ci]",
      },
    ],
    "@semantic-release/github",
  ],
  preset: "angular",
};
