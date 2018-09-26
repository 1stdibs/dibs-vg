#!/usr/bin/env node

const { execSync } = require('child_process');
const { GIT_BRANCH } = process.env;

if (!GIT_BRANCH) {
    console.error('not publishing from jenkins!');
    process.exit(1);
}

// from jenkins should be <remote>/<branch>
const [remote, branch] = GIT_BRANCH.split('/');

execSync(`git push --follow-tags ${remote} ${branch}`);
