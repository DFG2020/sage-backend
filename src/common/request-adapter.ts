/**
 * Interface for request adapters.
 */
export interface RequestAdapter<InternalObj, ExternalObj> {
    /**
     * Converts an internal object to an external object.
     * @param internalObj the internal object that will be adapted.
     */
    toExternal(internalObj: InternalObj): ExternalObj;

    /**
     * Converts an external object to an internal object.
     * @param externalObj the external object that will be adapted.
     */
    toInternal(externalObj: ExternalObj): InternalObj;
}
