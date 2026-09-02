import { CreateUserData, UpdateUserData, DeleteUserData, GetUserData, ListUsersData, CreateCourseData, UpdateCourseData, DeleteCourseData, GetCourseData, ListCoursesData, CreateModuleData, UpdateModuleData, DeleteModuleData, GetModuleData, ListModulesData, CreateEnrollmentData, UpdateEnrollmentData, DeleteEnrollmentData, GetEnrollmentData, ListEnrollmentsData, CreateAssessmentData, UpdateAssessmentData, DeleteAssessmentData, GetAssessmentData, ListAssessmentsData, CreateSubmissionData, UpdateSubmissionData, DeleteSubmissionData, GetSubmissionData, ListSubmissionsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateCourse(options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, void>): UseDataConnectMutationResult<CreateCourseData, undefined>;
export function useCreateCourse(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, void>): UseDataConnectMutationResult<CreateCourseData, undefined>;

export function useUpdateCourse(options?: useDataConnectMutationOptions<UpdateCourseData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCourseData, undefined>;
export function useUpdateCourse(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCourseData, FirebaseError, void>): UseDataConnectMutationResult<UpdateCourseData, undefined>;

export function useDeleteCourse(options?: useDataConnectMutationOptions<DeleteCourseData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCourseData, undefined>;
export function useDeleteCourse(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCourseData, FirebaseError, void>): UseDataConnectMutationResult<DeleteCourseData, undefined>;

export function useGetCourse(options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, undefined>;
export function useGetCourse(dc: DataConnect, options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, undefined>;

export function useListCourses(options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;
export function useListCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;

export function useCreateModule(options?: useDataConnectMutationOptions<CreateModuleData, FirebaseError, void>): UseDataConnectMutationResult<CreateModuleData, undefined>;
export function useCreateModule(dc: DataConnect, options?: useDataConnectMutationOptions<CreateModuleData, FirebaseError, void>): UseDataConnectMutationResult<CreateModuleData, undefined>;

export function useUpdateModule(options?: useDataConnectMutationOptions<UpdateModuleData, FirebaseError, void>): UseDataConnectMutationResult<UpdateModuleData, undefined>;
export function useUpdateModule(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateModuleData, FirebaseError, void>): UseDataConnectMutationResult<UpdateModuleData, undefined>;

export function useDeleteModule(options?: useDataConnectMutationOptions<DeleteModuleData, FirebaseError, void>): UseDataConnectMutationResult<DeleteModuleData, undefined>;
export function useDeleteModule(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteModuleData, FirebaseError, void>): UseDataConnectMutationResult<DeleteModuleData, undefined>;

export function useGetModule(options?: useDataConnectQueryOptions<GetModuleData>): UseDataConnectQueryResult<GetModuleData, undefined>;
export function useGetModule(dc: DataConnect, options?: useDataConnectQueryOptions<GetModuleData>): UseDataConnectQueryResult<GetModuleData, undefined>;

export function useListModules(options?: useDataConnectQueryOptions<ListModulesData>): UseDataConnectQueryResult<ListModulesData, undefined>;
export function useListModules(dc: DataConnect, options?: useDataConnectQueryOptions<ListModulesData>): UseDataConnectQueryResult<ListModulesData, undefined>;

export function useCreateEnrollment(options?: useDataConnectMutationOptions<CreateEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateEnrollmentData, undefined>;
export function useCreateEnrollment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateEnrollmentData, undefined>;

export function useUpdateEnrollment(options?: useDataConnectMutationOptions<UpdateEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateEnrollmentData, undefined>;
export function useUpdateEnrollment(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateEnrollmentData, undefined>;

export function useDeleteEnrollment(options?: useDataConnectMutationOptions<DeleteEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteEnrollmentData, undefined>;
export function useDeleteEnrollment(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEnrollmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteEnrollmentData, undefined>;

export function useGetEnrollment(options?: useDataConnectQueryOptions<GetEnrollmentData>): UseDataConnectQueryResult<GetEnrollmentData, undefined>;
export function useGetEnrollment(dc: DataConnect, options?: useDataConnectQueryOptions<GetEnrollmentData>): UseDataConnectQueryResult<GetEnrollmentData, undefined>;

export function useListEnrollments(options?: useDataConnectQueryOptions<ListEnrollmentsData>): UseDataConnectQueryResult<ListEnrollmentsData, undefined>;
export function useListEnrollments(dc: DataConnect, options?: useDataConnectQueryOptions<ListEnrollmentsData>): UseDataConnectQueryResult<ListEnrollmentsData, undefined>;

export function useCreateAssessment(options?: useDataConnectMutationOptions<CreateAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateAssessmentData, undefined>;
export function useCreateAssessment(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<CreateAssessmentData, undefined>;

export function useUpdateAssessment(options?: useDataConnectMutationOptions<UpdateAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateAssessmentData, undefined>;
export function useUpdateAssessment(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<UpdateAssessmentData, undefined>;

export function useDeleteAssessment(options?: useDataConnectMutationOptions<DeleteAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteAssessmentData, undefined>;
export function useDeleteAssessment(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteAssessmentData, FirebaseError, void>): UseDataConnectMutationResult<DeleteAssessmentData, undefined>;

export function useGetAssessment(options?: useDataConnectQueryOptions<GetAssessmentData>): UseDataConnectQueryResult<GetAssessmentData, undefined>;
export function useGetAssessment(dc: DataConnect, options?: useDataConnectQueryOptions<GetAssessmentData>): UseDataConnectQueryResult<GetAssessmentData, undefined>;

export function useListAssessments(options?: useDataConnectQueryOptions<ListAssessmentsData>): UseDataConnectQueryResult<ListAssessmentsData, undefined>;
export function useListAssessments(dc: DataConnect, options?: useDataConnectQueryOptions<ListAssessmentsData>): UseDataConnectQueryResult<ListAssessmentsData, undefined>;

export function useCreateSubmission(options?: useDataConnectMutationOptions<CreateSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<CreateSubmissionData, undefined>;
export function useCreateSubmission(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<CreateSubmissionData, undefined>;

export function useUpdateSubmission(options?: useDataConnectMutationOptions<UpdateSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<UpdateSubmissionData, undefined>;
export function useUpdateSubmission(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<UpdateSubmissionData, undefined>;

export function useDeleteSubmission(options?: useDataConnectMutationOptions<DeleteSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<DeleteSubmissionData, undefined>;
export function useDeleteSubmission(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSubmissionData, FirebaseError, void>): UseDataConnectMutationResult<DeleteSubmissionData, undefined>;

export function useGetSubmission(options?: useDataConnectQueryOptions<GetSubmissionData>): UseDataConnectQueryResult<GetSubmissionData, undefined>;
export function useGetSubmission(dc: DataConnect, options?: useDataConnectQueryOptions<GetSubmissionData>): UseDataConnectQueryResult<GetSubmissionData, undefined>;

export function useListSubmissions(options?: useDataConnectQueryOptions<ListSubmissionsData>): UseDataConnectQueryResult<ListSubmissionsData, undefined>;
export function useListSubmissions(dc: DataConnect, options?: useDataConnectQueryOptions<ListSubmissionsData>): UseDataConnectQueryResult<ListSubmissionsData, undefined>;
