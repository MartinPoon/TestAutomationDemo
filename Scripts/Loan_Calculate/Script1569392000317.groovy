import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.click(findTestObject('HS_calculator/reset'))

WebUI.setText(findTestObject('HS_calculator/loanAmount'), Principle)

WebUI.setText(findTestObject('HS_calculator/MonthlyRate'), InterestRate)

WebUI.setText(findTestObject('HS_calculator/RepaymentMonth'), NumberofMonth)

WebUI.setText(findTestObject('HS_calculator/HandlingFee'), Handlingfee)

WebUI.click(findTestObject('HS_calculator/calculate'))

WebUI.takeScreenshot()

Result = WebUI.getText(findTestObject('HS_calculator/Repaymentamount'))

