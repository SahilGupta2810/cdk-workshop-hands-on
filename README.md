# cdk-workshop-hands-on
It consist of a basic aws-cdk(SNS-SQS) stack. This shows how we can subscribe our SQS-Queue and Email to a SNS-Topic using cdk v2. 

- Prerequisites
    - AWS CLI - Interact with AWS Services through Terminal Session.
        
      https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
        
    - AWS Account and User
        - Create an IAM user with Administration permission
            
            ![image](https://user-images.githubusercontent.com/65444832/174357563-7de09f22-8b13-4a43-b7c8-03fb39f54920.png)
            
            IAM User Name: ***cdk_user***
        
            Permission: ***Administartion Access***

            Access Type: ***Programmatic Access , AWS Management Console***
            
           
        - Configure your AWS CLI using aws configure command
            
            (Download .csv file—>aws configure —> valid inputs)
            
            
        
    - NodeJS
        - Download :
            
            https://nodejs.dev/download](https://nodejs.dev/download
            
        - Check version : 
            
            ***node —version***


         
    - IDE
        
         - VS Code
        


    - AWS CDK Toolkit
    
        - Install the aws-cdk package:
          
            ***npm install -g aws-cdk***
            
           
        - Check the cdk version using 
            
            ***cdk —version***
            
            
    
    - New Project

         - ***cdk init app —language typescript***



    - CDK commands:

       -  ***npm run build***

       -  ***cdk synth***

       -  ***cdk build***

       -  ***cdk bootstrap***

        

    - Email - Queue Confirmation
