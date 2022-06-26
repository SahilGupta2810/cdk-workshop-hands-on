# cdk-workshop-hands-on
It consist of a basic aws-cdk(SNS-SQS) stack. This shows how we can subscribe our SQS-Queue and Email to a SNS-Topic using cdk v2. 


<details>
   <summary>Prerequisites
   </summary>

   - AWS CLI - Interact with AWS Services through Terminal Session.
        
      https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
        
   - AWS Account and User
        - Create an IAM user with Administration permission
            (Download .csv credentials file while creating an IAM User)
            
            ![image](https://user-images.githubusercontent.com/65444832/174357563-7de09f22-8b13-4a43-b7c8-03fb39f54920.png)
            ```
            
            IAM User Name: ***cdk_user***
        
            Permission: ***Administartion Access***

            Access Type: ***Programmatic Access , AWS Management Console***
            ```
            
           
        - Configure your AWS CLI using aws configure command
            ![aws-config](https://user-images.githubusercontent.com/65444832/174400468-da811393-5426-4679-a5f4-fc9eba58701a.jpg)

            
            (Downloaded .csv file consist of Access Key , Secret Access Key of IAM User—>aws configure)
            
          


        
   - NodeJS
        - Download :
            
            https://nodejs.dev/download](https://nodejs.dev/download
            
        - Check version : 
            ```
            node —version
            ```
   
            ![node-version](https://user-images.githubusercontent.com/65444832/174402030-82cd9e1d-f838-4753-b59e-0f775fe5ef6f.jpg)

            
         
   - IDE
        
        - VS Code
        


   - AWS CDK Toolkit
    
        - Install the aws-cdk package and Check the cdk version using 
            ```
            npm install -g aws-cdk
    
            cdk —version
            ```
   
        ![cdk-install](https://user-images.githubusercontent.com/65444832/174401171-2daf799c-3251-4f91-a162-a50f5ebc78a7.png)

            
                
   - New Project

            cdk init app —language typescript
   
   
        ![new-project](https://user-images.githubusercontent.com/65444832/174401669-4e1f2106-ff8b-4794-bfce-b046723bf0c6.jpg)



   - Build and Deploy
   
            npm run build
            
        ![npmRun (2)](https://user-images.githubusercontent.com/65444832/174402119-fce116d2-1656-4aea-b213-b46a94abf0bd.jpg)

        

            cdk synth && cdk deploy
   
        ![image](https://user-images.githubusercontent.com/65444832/174403396-1e32e098-f9a6-4da2-b715-cf3f911c89e9.png)
        ![synth and deploy](https://user-images.githubusercontent.com/65444832/174403521-a886eee0-ac0c-42e6-890b-d98a38995db6.png)

           
        


   - Useful CDK commands:

            npm run build

            cdk synth

            cdk deploy

            cdk bootstrap
        
            cdk ls

            cdk diff

</details>

<details>
   <summary>
      New Project
   </summary>
    
   - Create a new project using:
     
         cdk init app —language typescript

      ![Untitled](https://user-images.githubusercontent.com/65444832/175103568-12abd09b-91c1-4e70-9d04-5494c3d778cd.png)      
       
</details>

<details>
   <summary>
      Resource name
   </summary>
   
   - Stack Name
   ```
   CdkWorkshopHandsOnStack
   ```
   
   - Topic name
   ```
   cdk-workshop-topic
   ```
   
   - Queue name
   ```
   cdk-workshop-queue
   ```
</details>




<details>
   <summary>
      Project Architecture
   </summary>
   
  - The Architecture consist of an SNS Topic , SQS Queue and a Email Subscription. When the user publishes a message using SNS topic , the subscriber to that topic gets notification and the message; as shown below.
   
     ![Architecture](https://user-images.githubusercontent.com/65444832/175818561-54b81e61-133e-4b66-832d-153738835b66.png)
   
</details>

        
        
        
        
        

 
