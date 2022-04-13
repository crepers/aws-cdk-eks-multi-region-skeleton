import { App, Stack, StackProps } from 'aws-cdk-lib';                 
import { Construct } from 'constructs';

import codecommit = require('aws-cdk-lib/aws-codecommit');
import ecr = require('aws-cdk-lib/aws-ecr');
import codepipeline = require('aws-cdk-lib/aws-codepipeline');
import pipelineAction = require('aws-cdk-lib/aws-codepipeline-actions');
import { codeToECRspec, deployToEKSspec } from '../utils/buildspecs';


export class CicdStack extends Stack {

    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const primaryRegion = 'ap-northeast-2';
        const secondaryRegion = 'us-west-2';

    }
}


