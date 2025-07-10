trigger CaseTrigger on Case (before insert) {
    for (Case c : Trigger.new) {
        if (c.Subject == null) {
            c.Subject = 'Auto-generated subject';
        }
    }
}