/**
 * Structured data representing a device's status.
 */
class Status {
    constructor() {
        /** List of allowed values as per Roborock.STATUS_MAP */
        this.state = "UNKNOWN";
        this.error_code = null;
        this.battery = null;
        this.clean_time = null;   // Seconds?
        this.clean_area = null;   // mm²
        this.error_code = null;   // TODO
        this.map_present = false; // TODO
        this.in_cleaning = 0; // TODO
        this.fan_power = null;
        this.dnd_enabled = false;
        this.lab_status = 0; // 1 = persistent data enabled, else persistent data disabled
        this.mode = undefined;  // ViomiCleaningMode

        this.human_state = "Unknown";
        this.human_error = null;
    }
}

module.exports = Status;
