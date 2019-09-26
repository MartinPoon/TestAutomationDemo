<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Demo</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>7d9f30e8-0365-41c7-8592-15323e645374</testSuiteGuid>
   <testCaseLink>
      <guid>262b582e-805f-4787-a4e3-780df8a47dff</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Open_Calculator</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>1a4de246-444d-4dab-8742-835e5b37ae66</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Loan_Calculate</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>0f3d0d4a-5460-453b-93c6-dfa0df11494b</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-2</value>
         </iterationEntity>
         <testDataId>Data Files/Loan (1)</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>0f3d0d4a-5460-453b-93c6-dfa0df11494b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Principle</value>
         <variableId>79c37906-94e8-4a60-8086-2ddaa8a5bafe</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>0f3d0d4a-5460-453b-93c6-dfa0df11494b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>monthly interest rate</value>
         <variableId>b17bacbf-7760-41e8-8172-7ca0e085a620</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>0f3d0d4a-5460-453b-93c6-dfa0df11494b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>no. of months</value>
         <variableId>e89b82ff-e4aa-42c0-bc01-6d6b81a18e2a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>0f3d0d4a-5460-453b-93c6-dfa0df11494b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>handling fee</value>
         <variableId>13a34cb5-04f7-40dd-91f6-f0a179d0bb31</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>50596afc-1c37-4e12-b9f5-52298ffe50ac</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Close_Calculator</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
