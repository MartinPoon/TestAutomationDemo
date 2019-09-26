<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Demo2</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>40b538ec-989d-4af0-b5db-c24d861981e7</testSuiteGuid>
   <testCaseLink>
      <guid>665538a9-d900-4a34-809d-79bf56fc1fbd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Open_Calculator</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>722c512a-db2a-465c-a55d-af7897f748c1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Loan_Calculate</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>f9a54f87-1fc2-48fc-9cff-f5654ccb0ea6</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>5-6</value>
         </iterationEntity>
         <testDataId>Data Files/Loan (1)</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>f9a54f87-1fc2-48fc-9cff-f5654ccb0ea6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Principle</value>
         <variableId>79c37906-94e8-4a60-8086-2ddaa8a5bafe</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>f9a54f87-1fc2-48fc-9cff-f5654ccb0ea6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>monthly interest rate</value>
         <variableId>b17bacbf-7760-41e8-8172-7ca0e085a620</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>f9a54f87-1fc2-48fc-9cff-f5654ccb0ea6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>no. of months</value>
         <variableId>e89b82ff-e4aa-42c0-bc01-6d6b81a18e2a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>f9a54f87-1fc2-48fc-9cff-f5654ccb0ea6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>handling fee</value>
         <variableId>13a34cb5-04f7-40dd-91f6-f0a179d0bb31</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2b8315a3-eb47-4428-9b2d-58ccd8d85a64</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Close_Calculator</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
