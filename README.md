ngrok http 9000 --subdomain pumpaj

# Data

Exam prepare Endpoint
POSTMAN
BE: v2SqmsCreateExam\index.js

Exam started Endpoint
https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-started-Endpoint
BE: updateExamStartTime\index.js

Exam Process Update Question Endpoint
https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Update-Question-Endpoint
FE: src\api\sqms\index.js -> BE: v2SqmsUpdateData\index.js

Exam Process Update mouse_movment Endpoint
https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Update-mouse_movment-Endpoint
FE: src\hooks\sqmsAnalyzer.js -> BE: v2SqmsMouseUpdate\index.js

Exam Process Completed Endpoint
https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process-Completed-Endpoint
BE: sentDataOnFinish\index.js

Exam Process Endpoint
https://m-itsm.atlassian.net/wiki/spaces/EDUMSAGILE/pages/3783819291/Workflow+of+claiming+a+Voucher+and+doing+an+Exam#Exam-Process--Endpoint
BE: sqmsGetExamData\index.js
