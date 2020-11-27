import { ApiCompanyGet } from './apiCompanyGet';
import { ApiValidationErrorDetails } from '../apiValidationErrorDetails';
import { ApiDefaultResponseStatusEnum } from '../apiDefaultResponse';


/**
 * Generic API response. See documentation for data type for specific type details.
 */

export interface ApiResponseApiCompanyGet {
    data?: ApiCompanyGet;
    /**
     * Optional details for unexpected error responses.
     */
    errorDetails?: string;
    /**
     * Simple message to explain client developers the reason for error.
     */
    errorMessage?: string;
    /**
     * Response status. OK for successful reponses.
     */
    status: ApiDefaultResponseStatusEnum;
    validationErrorDetails?: ApiValidationErrorDetails;
}
