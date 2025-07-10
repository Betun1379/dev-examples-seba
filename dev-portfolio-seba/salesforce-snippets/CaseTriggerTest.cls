@isTest
private class CaseTriggerTest {
    @isTest static void testSubjectDefault() {
        Case c = new Case();
        insert c;
        System.assertNotEquals(null, c.Subject);
    }
}