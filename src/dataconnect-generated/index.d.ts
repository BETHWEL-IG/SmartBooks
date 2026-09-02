import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Assessment_Key {
  id: UUIDString;
  __typename?: 'Assessment_Key';
}

export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface CreateAssessmentData {
  assessment_insert: Assessment_Key;
}

export interface CreateCourseData {
  course_insert: Course_Key;
}

export interface CreateEnrollmentData {
  enrollment_insert: Enrollment_Key;
}

export interface CreateModuleData {
  module_insert: Module_Key;
}

export interface CreateSubmissionData {
  submission_insert: Submission_Key;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface DeleteAssessmentData {
  assessment_delete?: Assessment_Key | null;
}

export interface DeleteCourseData {
  course_delete?: Course_Key | null;
}

export interface DeleteEnrollmentData {
  enrollment_delete?: Enrollment_Key | null;
}

export interface DeleteModuleData {
  module_delete?: Module_Key | null;
}

export interface DeleteSubmissionData {
  submission_delete?: Submission_Key | null;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface Enrollment_Key {
  id: UUIDString;
  __typename?: 'Enrollment_Key';
}

export interface GetAssessmentData {
  assessment?: {
    type: string;
    maxScore?: number | null;
  };
}

export interface GetCourseData {
  course?: {
    title: string;
    instructor: {
      displayName?: string | null;
    };
  };
}

export interface GetEnrollmentData {
  enrollment?: {
    progressPercentage?: number | null;
  };
}

export interface GetModuleData {
  module?: {
    title: string;
    contentBody: string;
  };
}

export interface GetSubmissionData {
  submission?: {
    score: number;
    feedback?: string | null;
  };
}

export interface GetUserData {
  user?: {
    email: string;
    displayName?: string | null;
  };
}

export interface ListAssessmentsData {
  assessments: ({
    type: string;
  })[];
}

export interface ListCoursesData {
  courses: ({
    title: string;
  })[];
}

export interface ListEnrollmentsData {
  enrollments: ({
    course: {
      title: string;
    };
  })[];
}

export interface ListModulesData {
  modules: ({
    title: string;
  })[];
}

export interface ListSubmissionsData {
  submissions: ({
    score: number;
  })[];
}

export interface ListUsersData {
  users: ({
    email: string;
    displayName?: string | null;
  })[];
}

export interface Module_Key {
  id: UUIDString;
  __typename?: 'Module_Key';
}

export interface Submission_Key {
  id: UUIDString;
  __typename?: 'Submission_Key';
}

export interface UpdateAssessmentData {
  assessment_update?: Assessment_Key | null;
}

export interface UpdateCourseData {
  course_update?: Course_Key | null;
}

export interface UpdateEnrollmentData {
  enrollment_update?: Enrollment_Key | null;
}

export interface UpdateModuleData {
  module_update?: Module_Key | null;
}

export interface UpdateSubmissionData {
  submission_update?: Submission_Key | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(): MutationPromise<UpdateUserData, undefined>;
export function updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCourseData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateCourseData, undefined>;
  operationName: string;
}
export const createCourseRef: CreateCourseRef;

export function createCourse(): MutationPromise<CreateCourseData, undefined>;
export function createCourse(dc: DataConnect): MutationPromise<CreateCourseData, undefined>;

interface UpdateCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCourseData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateCourseData, undefined>;
  operationName: string;
}
export const updateCourseRef: UpdateCourseRef;

export function updateCourse(): MutationPromise<UpdateCourseData, undefined>;
export function updateCourse(dc: DataConnect): MutationPromise<UpdateCourseData, undefined>;

interface DeleteCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCourseData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteCourseData, undefined>;
  operationName: string;
}
export const deleteCourseRef: DeleteCourseRef;

export function deleteCourse(): MutationPromise<DeleteCourseData, undefined>;
export function deleteCourse(dc: DataConnect): MutationPromise<DeleteCourseData, undefined>;

interface GetCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCourseData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCourseData, undefined>;
  operationName: string;
}
export const getCourseRef: GetCourseRef;

export function getCourse(options?: ExecuteQueryOptions): QueryPromise<GetCourseData, undefined>;
export function getCourse(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCourseData, undefined>;

interface ListCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCoursesData, undefined>;
  operationName: string;
}
export const listCoursesRef: ListCoursesRef;

export function listCourses(options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;
export function listCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;

interface CreateModuleRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateModuleData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateModuleData, undefined>;
  operationName: string;
}
export const createModuleRef: CreateModuleRef;

export function createModule(): MutationPromise<CreateModuleData, undefined>;
export function createModule(dc: DataConnect): MutationPromise<CreateModuleData, undefined>;

interface UpdateModuleRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateModuleData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateModuleData, undefined>;
  operationName: string;
}
export const updateModuleRef: UpdateModuleRef;

export function updateModule(): MutationPromise<UpdateModuleData, undefined>;
export function updateModule(dc: DataConnect): MutationPromise<UpdateModuleData, undefined>;

interface DeleteModuleRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteModuleData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteModuleData, undefined>;
  operationName: string;
}
export const deleteModuleRef: DeleteModuleRef;

export function deleteModule(): MutationPromise<DeleteModuleData, undefined>;
export function deleteModule(dc: DataConnect): MutationPromise<DeleteModuleData, undefined>;

interface GetModuleRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetModuleData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetModuleData, undefined>;
  operationName: string;
}
export const getModuleRef: GetModuleRef;

export function getModule(options?: ExecuteQueryOptions): QueryPromise<GetModuleData, undefined>;
export function getModule(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetModuleData, undefined>;

interface ListModulesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListModulesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListModulesData, undefined>;
  operationName: string;
}
export const listModulesRef: ListModulesRef;

export function listModules(options?: ExecuteQueryOptions): QueryPromise<ListModulesData, undefined>;
export function listModules(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListModulesData, undefined>;

interface CreateEnrollmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateEnrollmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateEnrollmentData, undefined>;
  operationName: string;
}
export const createEnrollmentRef: CreateEnrollmentRef;

export function createEnrollment(): MutationPromise<CreateEnrollmentData, undefined>;
export function createEnrollment(dc: DataConnect): MutationPromise<CreateEnrollmentData, undefined>;

interface UpdateEnrollmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateEnrollmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateEnrollmentData, undefined>;
  operationName: string;
}
export const updateEnrollmentRef: UpdateEnrollmentRef;

export function updateEnrollment(): MutationPromise<UpdateEnrollmentData, undefined>;
export function updateEnrollment(dc: DataConnect): MutationPromise<UpdateEnrollmentData, undefined>;

interface DeleteEnrollmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteEnrollmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteEnrollmentData, undefined>;
  operationName: string;
}
export const deleteEnrollmentRef: DeleteEnrollmentRef;

export function deleteEnrollment(): MutationPromise<DeleteEnrollmentData, undefined>;
export function deleteEnrollment(dc: DataConnect): MutationPromise<DeleteEnrollmentData, undefined>;

interface GetEnrollmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnrollmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetEnrollmentData, undefined>;
  operationName: string;
}
export const getEnrollmentRef: GetEnrollmentRef;

export function getEnrollment(options?: ExecuteQueryOptions): QueryPromise<GetEnrollmentData, undefined>;
export function getEnrollment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEnrollmentData, undefined>;

interface ListEnrollmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnrollmentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEnrollmentsData, undefined>;
  operationName: string;
}
export const listEnrollmentsRef: ListEnrollmentsRef;

export function listEnrollments(options?: ExecuteQueryOptions): QueryPromise<ListEnrollmentsData, undefined>;
export function listEnrollments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEnrollmentsData, undefined>;

interface CreateAssessmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateAssessmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateAssessmentData, undefined>;
  operationName: string;
}
export const createAssessmentRef: CreateAssessmentRef;

export function createAssessment(): MutationPromise<CreateAssessmentData, undefined>;
export function createAssessment(dc: DataConnect): MutationPromise<CreateAssessmentData, undefined>;

interface UpdateAssessmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateAssessmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateAssessmentData, undefined>;
  operationName: string;
}
export const updateAssessmentRef: UpdateAssessmentRef;

export function updateAssessment(): MutationPromise<UpdateAssessmentData, undefined>;
export function updateAssessment(dc: DataConnect): MutationPromise<UpdateAssessmentData, undefined>;

interface DeleteAssessmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteAssessmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteAssessmentData, undefined>;
  operationName: string;
}
export const deleteAssessmentRef: DeleteAssessmentRef;

export function deleteAssessment(): MutationPromise<DeleteAssessmentData, undefined>;
export function deleteAssessment(dc: DataConnect): MutationPromise<DeleteAssessmentData, undefined>;

interface GetAssessmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAssessmentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAssessmentData, undefined>;
  operationName: string;
}
export const getAssessmentRef: GetAssessmentRef;

export function getAssessment(options?: ExecuteQueryOptions): QueryPromise<GetAssessmentData, undefined>;
export function getAssessment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAssessmentData, undefined>;

interface ListAssessmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAssessmentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAssessmentsData, undefined>;
  operationName: string;
}
export const listAssessmentsRef: ListAssessmentsRef;

export function listAssessments(options?: ExecuteQueryOptions): QueryPromise<ListAssessmentsData, undefined>;
export function listAssessments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAssessmentsData, undefined>;

interface CreateSubmissionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSubmissionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateSubmissionData, undefined>;
  operationName: string;
}
export const createSubmissionRef: CreateSubmissionRef;

export function createSubmission(): MutationPromise<CreateSubmissionData, undefined>;
export function createSubmission(dc: DataConnect): MutationPromise<CreateSubmissionData, undefined>;

interface UpdateSubmissionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateSubmissionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateSubmissionData, undefined>;
  operationName: string;
}
export const updateSubmissionRef: UpdateSubmissionRef;

export function updateSubmission(): MutationPromise<UpdateSubmissionData, undefined>;
export function updateSubmission(dc: DataConnect): MutationPromise<UpdateSubmissionData, undefined>;

interface DeleteSubmissionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteSubmissionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteSubmissionData, undefined>;
  operationName: string;
}
export const deleteSubmissionRef: DeleteSubmissionRef;

export function deleteSubmission(): MutationPromise<DeleteSubmissionData, undefined>;
export function deleteSubmission(dc: DataConnect): MutationPromise<DeleteSubmissionData, undefined>;

interface GetSubmissionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSubmissionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetSubmissionData, undefined>;
  operationName: string;
}
export const getSubmissionRef: GetSubmissionRef;

export function getSubmission(options?: ExecuteQueryOptions): QueryPromise<GetSubmissionData, undefined>;
export function getSubmission(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetSubmissionData, undefined>;

interface ListSubmissionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubmissionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSubmissionsData, undefined>;
  operationName: string;
}
export const listSubmissionsRef: ListSubmissionsRef;

export function listSubmissions(options?: ExecuteQueryOptions): QueryPromise<ListSubmissionsData, undefined>;
export function listSubmissions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSubmissionsData, undefined>;

