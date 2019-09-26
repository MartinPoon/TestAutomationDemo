<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Demo1</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>f161b8ec-210a-4537-8a38-cf241a4b4eef</testSuiteGuid>
   <testCaseLink>
      <guid>060d4e51-bb9f-48f8-a3a9-b875c2e02e8f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Open_Calculator</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>fd5cd6d7-ab56-407a-b5a0-1829388cea16</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Loan_Calculate</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>7a38dbdb-9a57-4ce5-8788-fdaeb2ea95c7</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>3-4</value>
         </iterationEntity>
         <testDataId>Data Files/Loan (1)</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>7a38dbdb-9a57-4ce5-8788-fdaeb2ea95c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Principle</value>
         <variableId>79c37906-94e8-4a60-8086-2ddaa8a5bafe</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7a38dbdb-9a57-4ce5-8788-fdaeb2ea95c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>monthly interest rate</value>
         <variableId>b17bacbf-7760-41e8-8172-7ca0e085a620</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7a38dbdb-9a57-4ce5-8788-fdaeb2ea95c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>no. of months</value>
         <variableId>e89b82ff-e4aa-42c0-bc01-6d6b81a18e2a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7a38dbdb-9a57-4ce5-8788-fdaeb2ea95c7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>handling fee</value>
         <variableId>13a34cb5-04f7-40dd-91f6-f0a179d0bb31</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>6960d3c7-56a0-4274-ab11-ccc0f0ecb967</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Close_Calculator</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
