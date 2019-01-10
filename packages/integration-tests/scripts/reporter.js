/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const SpecReporter = require('wdio-spec-reporter');

function decorateCompatPreface(reporter, preface) {
    const modePreface = ` [${reporter.options.mode}]`;
    return preface + modePreface;
}

class RaptorIntegrationReporter extends SpecReporter {
    getResultList(cid, suites, preface = '') {
        return super.getResultList.call(this, cid, suites, decorateCompatPreface(this, preface));
    }
}

RaptorIntegrationReporter.reporterName = 'RaptorIntegrationReporter';

module.exports = RaptorIntegrationReporter;