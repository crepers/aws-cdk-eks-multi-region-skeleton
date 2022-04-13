import { App, Stack, StackProps } from 'aws-cdk-lib';                 
import { Construct } from 'constructs';
import { readYamlFromDir } from '../utils/read-file';

export class ContainerStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);


  }

}


