# Project Overview

This project is designed to manage the workflow of claiming a voucher and conducting an exam. It provides various endpoints to handle different stages of the exam process.

## Setup Instructions

To run the project locally, use the following command to start the server:

```bash
ngrok http 9000 --subdomain pumpaj
```

## Endpoints

### Exam Prepare Endpoint
- **Description**: Endpoint to prepare the exam.
- **Details**: Available in POSTMAN.
- **Backend**: `v2SqmsCreateExam\index.js`

### Exam Started Endpoint
- **Description**: Marks the exam as started.
- **Documentation**: [Exam Started Endpoint](https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-started-Endpoint)
- **Backend**: `updateExamStartTime\index.js`

### Exam Process Update Question Endpoint
- **Description**: Updates the exam process with new question data.
- **Documentation**: [Exam Process Update Question](https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Update-Question-Endpoint)
- **Frontend**: `src\api\sqms\index.js`
- **Backend**: `v2SqmsUpdateData\index.js`

### Exam Process Update Mouse Movement Endpoint
- **Description**: Updates the exam process with mouse movement data.
- **Documentation**: [Exam Process Update Mouse Movement](https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Update-mouse_movment-Endpoint)
- **Frontend**: `src\hooks\sqmsAnalyzer.js`
- **Backend**: `v2SqmsMouseUpdate\index.js`

### Exam Process Completed Endpoint
- **Description**: Marks the exam process as completed.
- **Documentation**: [Exam Process Completed](https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Completed-Endpoint)
- **Backend**: `sentDataOnFinish\index.js`

### Exam Process Endpoint
- **Description**: Retrieves exam process data.
- **Documentation**: [Exam Process](https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process--Endpoint)
- **Backend**: `sqmsGetExamData\index.js`

## Development Notes

Ensure that all dependencies are installed and the server is running before testing any endpoints.
