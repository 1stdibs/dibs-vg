#!/usr/bin/env node

const { GIT_BRANCH } = process.env;
const { sanityChecks } = require('./buildHelpers');

// will exit in here
sanityChecks();

// it is assumed that the git branch is checked
// out to `master` already when publishing.
// jenkins is configured to do this with the
// `Source Code Management
//      > Additional Behaviors
//      > Check out specific local branch`
// plugin

// from jenkins should be <remote>/<branch>
const [, branch] = GIT_BRANCH.split('/');

if (branch !== 'master') {
    outputBranchError(branch);
    process.exit(1);
}


