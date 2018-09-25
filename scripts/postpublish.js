#!/usr/bin/env node

const { execSync } = require('child_process');
const { sanityChecks, encodingOnly, stdOutToTerminal } = require('./buildHelpers');
const { GIT_BRANCH } = process.env;

// will exit in here
sanityChecks();

// it is assumed that the git branch is checked
// out to `master` already when publishing
// jenkins is configured to do this with the
// `Source Code Management
//      > Additional Behaviors
//      > Check out specific local branch`
// plugin

// from jenkins should be <remote>/<branch>
const [remote, branch] = GIT_BRANCH.split('/');
execSync(`git push --follow-tags ${remote} ${branch}`, stdOutToTerminal);
