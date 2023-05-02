const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
  plugins: {
    "@release-it/conventional-changelog": {
      path: ".",
      infile: "CHANGELOG.md",
      preset: "conventionalcommits",
      gitRawCommitsOpts: {
        path: ".",
      },
    },
  },
  git: {
    requireCleanWorkingDir: false,
    tagName: `${scope}/v${version}-dev`,
    pushRepo: "git@github.com:ejardim-agro/monorepo-semantic-releases.git",
    commit: true,
    push: true,
    commitsPath: ".",
    commitMessage: `feat(${scope}): released version v${version} [no ci]`,
    requireCommits: false,
    requireCommitsFail: false,
  },
  npm: {
    publish: false,
    versionArgs: ["--workspaces false"],
  },
  github: {
    release: false,
    releaseName: `${scope}/v${version}-dev`,
  },
  hooks: {
    "before:git:release": ["git add --all"],
  },
};
