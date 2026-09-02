# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListUsers*](#listusers)
  - [*GetCourse*](#getcourse)
  - [*ListCourses*](#listcourses)
  - [*GetModule*](#getmodule)
  - [*ListModules*](#listmodules)
  - [*GetEnrollment*](#getenrollment)
  - [*ListEnrollments*](#listenrollments)
  - [*GetAssessment*](#getassessment)
  - [*ListAssessments*](#listassessments)
  - [*GetSubmission*](#getsubmission)
  - [*ListSubmissions*](#listsubmissions)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateCourse*](#createcourse)
  - [*UpdateCourse*](#updatecourse)
  - [*DeleteCourse*](#deletecourse)
  - [*CreateModule*](#createmodule)
  - [*UpdateModule*](#updatemodule)
  - [*DeleteModule*](#deletemodule)
  - [*CreateEnrollment*](#createenrollment)
  - [*UpdateEnrollment*](#updateenrollment)
  - [*DeleteEnrollment*](#deleteenrollment)
  - [*CreateAssessment*](#createassessment)
  - [*UpdateAssessment*](#updateassessment)
  - [*DeleteAssessment*](#deleteassessment)
  - [*CreateSubmission*](#createsubmission)
  - [*UpdateSubmission*](#updatesubmission)
  - [*DeleteSubmission*](#deletesubmission)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    email: string;
    displayName?: string | null;
  };
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    email: string;
    displayName?: string | null;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetCourse
You can execute the `GetCourse` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCourse(options?: ExecuteQueryOptions): QueryPromise<GetCourseData, undefined>;

interface GetCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCourseData, undefined>;
}
export const getCourseRef: GetCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCourse(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCourseData, undefined>;

interface GetCourseRef {
  ...
  (dc: DataConnect): QueryRef<GetCourseData, undefined>;
}
export const getCourseRef: GetCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCourseRef:
```typescript
const name = getCourseRef.operationName;
console.log(name);
```

### Variables
The `GetCourse` query has no variables.
### Return Type
Recall that executing the `GetCourse` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCourseData {
  course?: {
    title: string;
    instructor: {
      displayName?: string | null;
    };
  };
}
```
### Using `GetCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCourse } from '@dataconnect/generated';


// Call the `getCourse()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCourse();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCourse(dataConnect);

console.log(data.course);

// Or, you can use the `Promise` API.
getCourse().then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

### Using `GetCourse`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCourseRef } from '@dataconnect/generated';


// Call the `getCourseRef()` function to get a reference to the query.
const ref = getCourseRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCourseRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.course);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

## ListCourses
You can execute the `ListCourses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCourses(options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;

interface ListCoursesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoursesData, undefined>;
}
export const listCoursesRef: ListCoursesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;

interface ListCoursesRef {
  ...
  (dc: DataConnect): QueryRef<ListCoursesData, undefined>;
}
export const listCoursesRef: ListCoursesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCoursesRef:
```typescript
const name = listCoursesRef.operationName;
console.log(name);
```

### Variables
The `ListCourses` query has no variables.
### Return Type
Recall that executing the `ListCourses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCoursesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCoursesData {
  courses: ({
    title: string;
  })[];
}
```
### Using `ListCourses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCourses } from '@dataconnect/generated';


// Call the `listCourses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCourses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCourses(dataConnect);

console.log(data.courses);

// Or, you can use the `Promise` API.
listCourses().then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

### Using `ListCourses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCoursesRef } from '@dataconnect/generated';


// Call the `listCoursesRef()` function to get a reference to the query.
const ref = listCoursesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCoursesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.courses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

## GetModule
You can execute the `GetModule` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getModule(options?: ExecuteQueryOptions): QueryPromise<GetModuleData, undefined>;

interface GetModuleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetModuleData, undefined>;
}
export const getModuleRef: GetModuleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getModule(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetModuleData, undefined>;

interface GetModuleRef {
  ...
  (dc: DataConnect): QueryRef<GetModuleData, undefined>;
}
export const getModuleRef: GetModuleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getModuleRef:
```typescript
const name = getModuleRef.operationName;
console.log(name);
```

### Variables
The `GetModule` query has no variables.
### Return Type
Recall that executing the `GetModule` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetModuleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetModuleData {
  module?: {
    title: string;
    contentBody: string;
  };
}
```
### Using `GetModule`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getModule } from '@dataconnect/generated';


// Call the `getModule()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getModule();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getModule(dataConnect);

console.log(data.module);

// Or, you can use the `Promise` API.
getModule().then((response) => {
  const data = response.data;
  console.log(data.module);
});
```

### Using `GetModule`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getModuleRef } from '@dataconnect/generated';


// Call the `getModuleRef()` function to get a reference to the query.
const ref = getModuleRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getModuleRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.module);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.module);
});
```

## ListModules
You can execute the `ListModules` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listModules(options?: ExecuteQueryOptions): QueryPromise<ListModulesData, undefined>;

interface ListModulesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListModulesData, undefined>;
}
export const listModulesRef: ListModulesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listModules(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListModulesData, undefined>;

interface ListModulesRef {
  ...
  (dc: DataConnect): QueryRef<ListModulesData, undefined>;
}
export const listModulesRef: ListModulesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listModulesRef:
```typescript
const name = listModulesRef.operationName;
console.log(name);
```

### Variables
The `ListModules` query has no variables.
### Return Type
Recall that executing the `ListModules` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListModulesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListModulesData {
  modules: ({
    title: string;
  })[];
}
```
### Using `ListModules`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listModules } from '@dataconnect/generated';


// Call the `listModules()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listModules();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listModules(dataConnect);

console.log(data.modules);

// Or, you can use the `Promise` API.
listModules().then((response) => {
  const data = response.data;
  console.log(data.modules);
});
```

### Using `ListModules`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listModulesRef } from '@dataconnect/generated';


// Call the `listModulesRef()` function to get a reference to the query.
const ref = listModulesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listModulesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.modules);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.modules);
});
```

## GetEnrollment
You can execute the `GetEnrollment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnrollment(options?: ExecuteQueryOptions): QueryPromise<GetEnrollmentData, undefined>;

interface GetEnrollmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnrollmentData, undefined>;
}
export const getEnrollmentRef: GetEnrollmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnrollment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEnrollmentData, undefined>;

interface GetEnrollmentRef {
  ...
  (dc: DataConnect): QueryRef<GetEnrollmentData, undefined>;
}
export const getEnrollmentRef: GetEnrollmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnrollmentRef:
```typescript
const name = getEnrollmentRef.operationName;
console.log(name);
```

### Variables
The `GetEnrollment` query has no variables.
### Return Type
Recall that executing the `GetEnrollment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnrollmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetEnrollmentData {
  enrollment?: {
    progressPercentage?: number | null;
  };
}
```
### Using `GetEnrollment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnrollment } from '@dataconnect/generated';


// Call the `getEnrollment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnrollment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnrollment(dataConnect);

console.log(data.enrollment);

// Or, you can use the `Promise` API.
getEnrollment().then((response) => {
  const data = response.data;
  console.log(data.enrollment);
});
```

### Using `GetEnrollment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnrollmentRef } from '@dataconnect/generated';


// Call the `getEnrollmentRef()` function to get a reference to the query.
const ref = getEnrollmentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnrollmentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.enrollment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment);
});
```

## ListEnrollments
You can execute the `ListEnrollments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEnrollments(options?: ExecuteQueryOptions): QueryPromise<ListEnrollmentsData, undefined>;

interface ListEnrollmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnrollmentsData, undefined>;
}
export const listEnrollmentsRef: ListEnrollmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEnrollments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListEnrollmentsData, undefined>;

interface ListEnrollmentsRef {
  ...
  (dc: DataConnect): QueryRef<ListEnrollmentsData, undefined>;
}
export const listEnrollmentsRef: ListEnrollmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEnrollmentsRef:
```typescript
const name = listEnrollmentsRef.operationName;
console.log(name);
```

### Variables
The `ListEnrollments` query has no variables.
### Return Type
Recall that executing the `ListEnrollments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEnrollmentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEnrollmentsData {
  enrollments: ({
    course: {
      title: string;
    };
  })[];
}
```
### Using `ListEnrollments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEnrollments } from '@dataconnect/generated';


// Call the `listEnrollments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEnrollments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEnrollments(dataConnect);

console.log(data.enrollments);

// Or, you can use the `Promise` API.
listEnrollments().then((response) => {
  const data = response.data;
  console.log(data.enrollments);
});
```

### Using `ListEnrollments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEnrollmentsRef } from '@dataconnect/generated';


// Call the `listEnrollmentsRef()` function to get a reference to the query.
const ref = listEnrollmentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEnrollmentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.enrollments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollments);
});
```

## GetAssessment
You can execute the `GetAssessment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAssessment(options?: ExecuteQueryOptions): QueryPromise<GetAssessmentData, undefined>;

interface GetAssessmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAssessmentData, undefined>;
}
export const getAssessmentRef: GetAssessmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssessment(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAssessmentData, undefined>;

interface GetAssessmentRef {
  ...
  (dc: DataConnect): QueryRef<GetAssessmentData, undefined>;
}
export const getAssessmentRef: GetAssessmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssessmentRef:
```typescript
const name = getAssessmentRef.operationName;
console.log(name);
```

### Variables
The `GetAssessment` query has no variables.
### Return Type
Recall that executing the `GetAssessment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssessmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssessmentData {
  assessment?: {
    type: string;
    maxScore?: number | null;
  };
}
```
### Using `GetAssessment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssessment } from '@dataconnect/generated';


// Call the `getAssessment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssessment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssessment(dataConnect);

console.log(data.assessment);

// Or, you can use the `Promise` API.
getAssessment().then((response) => {
  const data = response.data;
  console.log(data.assessment);
});
```

### Using `GetAssessment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssessmentRef } from '@dataconnect/generated';


// Call the `getAssessmentRef()` function to get a reference to the query.
const ref = getAssessmentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssessmentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assessment);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assessment);
});
```

## ListAssessments
You can execute the `ListAssessments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAssessments(options?: ExecuteQueryOptions): QueryPromise<ListAssessmentsData, undefined>;

interface ListAssessmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAssessmentsData, undefined>;
}
export const listAssessmentsRef: ListAssessmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAssessments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAssessmentsData, undefined>;

interface ListAssessmentsRef {
  ...
  (dc: DataConnect): QueryRef<ListAssessmentsData, undefined>;
}
export const listAssessmentsRef: ListAssessmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAssessmentsRef:
```typescript
const name = listAssessmentsRef.operationName;
console.log(name);
```

### Variables
The `ListAssessments` query has no variables.
### Return Type
Recall that executing the `ListAssessments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAssessmentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAssessmentsData {
  assessments: ({
    type: string;
  })[];
}
```
### Using `ListAssessments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAssessments } from '@dataconnect/generated';


// Call the `listAssessments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAssessments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAssessments(dataConnect);

console.log(data.assessments);

// Or, you can use the `Promise` API.
listAssessments().then((response) => {
  const data = response.data;
  console.log(data.assessments);
});
```

### Using `ListAssessments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAssessmentsRef } from '@dataconnect/generated';


// Call the `listAssessmentsRef()` function to get a reference to the query.
const ref = listAssessmentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAssessmentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assessments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assessments);
});
```

## GetSubmission
You can execute the `GetSubmission` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSubmission(options?: ExecuteQueryOptions): QueryPromise<GetSubmissionData, undefined>;

interface GetSubmissionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSubmissionData, undefined>;
}
export const getSubmissionRef: GetSubmissionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSubmission(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetSubmissionData, undefined>;

interface GetSubmissionRef {
  ...
  (dc: DataConnect): QueryRef<GetSubmissionData, undefined>;
}
export const getSubmissionRef: GetSubmissionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSubmissionRef:
```typescript
const name = getSubmissionRef.operationName;
console.log(name);
```

### Variables
The `GetSubmission` query has no variables.
### Return Type
Recall that executing the `GetSubmission` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSubmissionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSubmissionData {
  submission?: {
    score: number;
    feedback?: string | null;
  };
}
```
### Using `GetSubmission`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSubmission } from '@dataconnect/generated';


// Call the `getSubmission()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSubmission();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSubmission(dataConnect);

console.log(data.submission);

// Or, you can use the `Promise` API.
getSubmission().then((response) => {
  const data = response.data;
  console.log(data.submission);
});
```

### Using `GetSubmission`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSubmissionRef } from '@dataconnect/generated';


// Call the `getSubmissionRef()` function to get a reference to the query.
const ref = getSubmissionRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSubmissionRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.submission);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.submission);
});
```

## ListSubmissions
You can execute the `ListSubmissions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSubmissions(options?: ExecuteQueryOptions): QueryPromise<ListSubmissionsData, undefined>;

interface ListSubmissionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubmissionsData, undefined>;
}
export const listSubmissionsRef: ListSubmissionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSubmissions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSubmissionsData, undefined>;

interface ListSubmissionsRef {
  ...
  (dc: DataConnect): QueryRef<ListSubmissionsData, undefined>;
}
export const listSubmissionsRef: ListSubmissionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSubmissionsRef:
```typescript
const name = listSubmissionsRef.operationName;
console.log(name);
```

### Variables
The `ListSubmissions` query has no variables.
### Return Type
Recall that executing the `ListSubmissions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSubmissionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSubmissionsData {
  submissions: ({
    score: number;
  })[];
}
```
### Using `ListSubmissions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSubmissions } from '@dataconnect/generated';


// Call the `listSubmissions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSubmissions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSubmissions(dataConnect);

console.log(data.submissions);

// Or, you can use the `Promise` API.
listSubmissions().then((response) => {
  const data = response.data;
  console.log(data.submissions);
});
```

### Using `ListSubmissions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSubmissionsRef } from '@dataconnect/generated';


// Call the `listSubmissionsRef()` function to get a reference to the query.
const ref = listSubmissionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSubmissionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.submissions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.submissions);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has no variables.
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser } from '@dataconnect/generated';


// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef } from '@dataconnect/generated';


// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateCourse
You can execute the `CreateCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCourse(): MutationPromise<CreateCourseData, undefined>;

interface CreateCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCourseData, undefined>;
}
export const createCourseRef: CreateCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCourse(dc: DataConnect): MutationPromise<CreateCourseData, undefined>;

interface CreateCourseRef {
  ...
  (dc: DataConnect): MutationRef<CreateCourseData, undefined>;
}
export const createCourseRef: CreateCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCourseRef:
```typescript
const name = createCourseRef.operationName;
console.log(name);
```

### Variables
The `CreateCourse` mutation has no variables.
### Return Type
Recall that executing the `CreateCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCourseData {
  course_insert: Course_Key;
}
```
### Using `CreateCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCourse } from '@dataconnect/generated';


// Call the `createCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCourse();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCourse(dataConnect);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
createCourse().then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

### Using `CreateCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCourseRef } from '@dataconnect/generated';


// Call the `createCourseRef()` function to get a reference to the mutation.
const ref = createCourseRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCourseRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

## UpdateCourse
You can execute the `UpdateCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCourse(): MutationPromise<UpdateCourseData, undefined>;

interface UpdateCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateCourseData, undefined>;
}
export const updateCourseRef: UpdateCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCourse(dc: DataConnect): MutationPromise<UpdateCourseData, undefined>;

interface UpdateCourseRef {
  ...
  (dc: DataConnect): MutationRef<UpdateCourseData, undefined>;
}
export const updateCourseRef: UpdateCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCourseRef:
```typescript
const name = updateCourseRef.operationName;
console.log(name);
```

### Variables
The `UpdateCourse` mutation has no variables.
### Return Type
Recall that executing the `UpdateCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCourseData {
  course_update?: Course_Key | null;
}
```
### Using `UpdateCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCourse } from '@dataconnect/generated';


// Call the `updateCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCourse();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCourse(dataConnect);

console.log(data.course_update);

// Or, you can use the `Promise` API.
updateCourse().then((response) => {
  const data = response.data;
  console.log(data.course_update);
});
```

### Using `UpdateCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCourseRef } from '@dataconnect/generated';


// Call the `updateCourseRef()` function to get a reference to the mutation.
const ref = updateCourseRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCourseRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.course_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.course_update);
});
```

## DeleteCourse
You can execute the `DeleteCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteCourse(): MutationPromise<DeleteCourseData, undefined>;

interface DeleteCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteCourseData, undefined>;
}
export const deleteCourseRef: DeleteCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCourse(dc: DataConnect): MutationPromise<DeleteCourseData, undefined>;

interface DeleteCourseRef {
  ...
  (dc: DataConnect): MutationRef<DeleteCourseData, undefined>;
}
export const deleteCourseRef: DeleteCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCourseRef:
```typescript
const name = deleteCourseRef.operationName;
console.log(name);
```

### Variables
The `DeleteCourse` mutation has no variables.
### Return Type
Recall that executing the `DeleteCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCourseData {
  course_delete?: Course_Key | null;
}
```
### Using `DeleteCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCourse } from '@dataconnect/generated';


// Call the `deleteCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCourse();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCourse(dataConnect);

console.log(data.course_delete);

// Or, you can use the `Promise` API.
deleteCourse().then((response) => {
  const data = response.data;
  console.log(data.course_delete);
});
```

### Using `DeleteCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCourseRef } from '@dataconnect/generated';


// Call the `deleteCourseRef()` function to get a reference to the mutation.
const ref = deleteCourseRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCourseRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.course_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.course_delete);
});
```

## CreateModule
You can execute the `CreateModule` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createModule(): MutationPromise<CreateModuleData, undefined>;

interface CreateModuleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateModuleData, undefined>;
}
export const createModuleRef: CreateModuleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createModule(dc: DataConnect): MutationPromise<CreateModuleData, undefined>;

interface CreateModuleRef {
  ...
  (dc: DataConnect): MutationRef<CreateModuleData, undefined>;
}
export const createModuleRef: CreateModuleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createModuleRef:
```typescript
const name = createModuleRef.operationName;
console.log(name);
```

### Variables
The `CreateModule` mutation has no variables.
### Return Type
Recall that executing the `CreateModule` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateModuleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateModuleData {
  module_insert: Module_Key;
}
```
### Using `CreateModule`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createModule } from '@dataconnect/generated';


// Call the `createModule()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createModule();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createModule(dataConnect);

console.log(data.module_insert);

// Or, you can use the `Promise` API.
createModule().then((response) => {
  const data = response.data;
  console.log(data.module_insert);
});
```

### Using `CreateModule`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createModuleRef } from '@dataconnect/generated';


// Call the `createModuleRef()` function to get a reference to the mutation.
const ref = createModuleRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createModuleRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.module_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.module_insert);
});
```

## UpdateModule
You can execute the `UpdateModule` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateModule(): MutationPromise<UpdateModuleData, undefined>;

interface UpdateModuleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateModuleData, undefined>;
}
export const updateModuleRef: UpdateModuleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateModule(dc: DataConnect): MutationPromise<UpdateModuleData, undefined>;

interface UpdateModuleRef {
  ...
  (dc: DataConnect): MutationRef<UpdateModuleData, undefined>;
}
export const updateModuleRef: UpdateModuleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateModuleRef:
```typescript
const name = updateModuleRef.operationName;
console.log(name);
```

### Variables
The `UpdateModule` mutation has no variables.
### Return Type
Recall that executing the `UpdateModule` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateModuleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateModuleData {
  module_update?: Module_Key | null;
}
```
### Using `UpdateModule`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateModule } from '@dataconnect/generated';


// Call the `updateModule()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateModule();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateModule(dataConnect);

console.log(data.module_update);

// Or, you can use the `Promise` API.
updateModule().then((response) => {
  const data = response.data;
  console.log(data.module_update);
});
```

### Using `UpdateModule`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateModuleRef } from '@dataconnect/generated';


// Call the `updateModuleRef()` function to get a reference to the mutation.
const ref = updateModuleRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateModuleRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.module_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.module_update);
});
```

## DeleteModule
You can execute the `DeleteModule` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteModule(): MutationPromise<DeleteModuleData, undefined>;

interface DeleteModuleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteModuleData, undefined>;
}
export const deleteModuleRef: DeleteModuleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteModule(dc: DataConnect): MutationPromise<DeleteModuleData, undefined>;

interface DeleteModuleRef {
  ...
  (dc: DataConnect): MutationRef<DeleteModuleData, undefined>;
}
export const deleteModuleRef: DeleteModuleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteModuleRef:
```typescript
const name = deleteModuleRef.operationName;
console.log(name);
```

### Variables
The `DeleteModule` mutation has no variables.
### Return Type
Recall that executing the `DeleteModule` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteModuleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteModuleData {
  module_delete?: Module_Key | null;
}
```
### Using `DeleteModule`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteModule } from '@dataconnect/generated';


// Call the `deleteModule()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteModule();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteModule(dataConnect);

console.log(data.module_delete);

// Or, you can use the `Promise` API.
deleteModule().then((response) => {
  const data = response.data;
  console.log(data.module_delete);
});
```

### Using `DeleteModule`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteModuleRef } from '@dataconnect/generated';


// Call the `deleteModuleRef()` function to get a reference to the mutation.
const ref = deleteModuleRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteModuleRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.module_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.module_delete);
});
```

## CreateEnrollment
You can execute the `CreateEnrollment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEnrollment(): MutationPromise<CreateEnrollmentData, undefined>;

interface CreateEnrollmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateEnrollmentData, undefined>;
}
export const createEnrollmentRef: CreateEnrollmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEnrollment(dc: DataConnect): MutationPromise<CreateEnrollmentData, undefined>;

interface CreateEnrollmentRef {
  ...
  (dc: DataConnect): MutationRef<CreateEnrollmentData, undefined>;
}
export const createEnrollmentRef: CreateEnrollmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEnrollmentRef:
```typescript
const name = createEnrollmentRef.operationName;
console.log(name);
```

### Variables
The `CreateEnrollment` mutation has no variables.
### Return Type
Recall that executing the `CreateEnrollment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEnrollmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEnrollmentData {
  enrollment_insert: Enrollment_Key;
}
```
### Using `CreateEnrollment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEnrollment } from '@dataconnect/generated';


// Call the `createEnrollment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEnrollment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEnrollment(dataConnect);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
createEnrollment().then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

### Using `CreateEnrollment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEnrollmentRef } from '@dataconnect/generated';


// Call the `createEnrollmentRef()` function to get a reference to the mutation.
const ref = createEnrollmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEnrollmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

## UpdateEnrollment
You can execute the `UpdateEnrollment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateEnrollment(): MutationPromise<UpdateEnrollmentData, undefined>;

interface UpdateEnrollmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateEnrollmentData, undefined>;
}
export const updateEnrollmentRef: UpdateEnrollmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEnrollment(dc: DataConnect): MutationPromise<UpdateEnrollmentData, undefined>;

interface UpdateEnrollmentRef {
  ...
  (dc: DataConnect): MutationRef<UpdateEnrollmentData, undefined>;
}
export const updateEnrollmentRef: UpdateEnrollmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEnrollmentRef:
```typescript
const name = updateEnrollmentRef.operationName;
console.log(name);
```

### Variables
The `UpdateEnrollment` mutation has no variables.
### Return Type
Recall that executing the `UpdateEnrollment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEnrollmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEnrollmentData {
  enrollment_update?: Enrollment_Key | null;
}
```
### Using `UpdateEnrollment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEnrollment } from '@dataconnect/generated';


// Call the `updateEnrollment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEnrollment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEnrollment(dataConnect);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
updateEnrollment().then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

### Using `UpdateEnrollment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEnrollmentRef } from '@dataconnect/generated';


// Call the `updateEnrollmentRef()` function to get a reference to the mutation.
const ref = updateEnrollmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEnrollmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

## DeleteEnrollment
You can execute the `DeleteEnrollment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEnrollment(): MutationPromise<DeleteEnrollmentData, undefined>;

interface DeleteEnrollmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteEnrollmentData, undefined>;
}
export const deleteEnrollmentRef: DeleteEnrollmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEnrollment(dc: DataConnect): MutationPromise<DeleteEnrollmentData, undefined>;

interface DeleteEnrollmentRef {
  ...
  (dc: DataConnect): MutationRef<DeleteEnrollmentData, undefined>;
}
export const deleteEnrollmentRef: DeleteEnrollmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEnrollmentRef:
```typescript
const name = deleteEnrollmentRef.operationName;
console.log(name);
```

### Variables
The `DeleteEnrollment` mutation has no variables.
### Return Type
Recall that executing the `DeleteEnrollment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEnrollmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEnrollmentData {
  enrollment_delete?: Enrollment_Key | null;
}
```
### Using `DeleteEnrollment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEnrollment } from '@dataconnect/generated';


// Call the `deleteEnrollment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEnrollment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEnrollment(dataConnect);

console.log(data.enrollment_delete);

// Or, you can use the `Promise` API.
deleteEnrollment().then((response) => {
  const data = response.data;
  console.log(data.enrollment_delete);
});
```

### Using `DeleteEnrollment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEnrollmentRef } from '@dataconnect/generated';


// Call the `deleteEnrollmentRef()` function to get a reference to the mutation.
const ref = deleteEnrollmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEnrollmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_delete);
});
```

## CreateAssessment
You can execute the `CreateAssessment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createAssessment(): MutationPromise<CreateAssessmentData, undefined>;

interface CreateAssessmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateAssessmentData, undefined>;
}
export const createAssessmentRef: CreateAssessmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAssessment(dc: DataConnect): MutationPromise<CreateAssessmentData, undefined>;

interface CreateAssessmentRef {
  ...
  (dc: DataConnect): MutationRef<CreateAssessmentData, undefined>;
}
export const createAssessmentRef: CreateAssessmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAssessmentRef:
```typescript
const name = createAssessmentRef.operationName;
console.log(name);
```

### Variables
The `CreateAssessment` mutation has no variables.
### Return Type
Recall that executing the `CreateAssessment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAssessmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAssessmentData {
  assessment_insert: Assessment_Key;
}
```
### Using `CreateAssessment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAssessment } from '@dataconnect/generated';


// Call the `createAssessment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAssessment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAssessment(dataConnect);

console.log(data.assessment_insert);

// Or, you can use the `Promise` API.
createAssessment().then((response) => {
  const data = response.data;
  console.log(data.assessment_insert);
});
```

### Using `CreateAssessment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAssessmentRef } from '@dataconnect/generated';


// Call the `createAssessmentRef()` function to get a reference to the mutation.
const ref = createAssessmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAssessmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.assessment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.assessment_insert);
});
```

## UpdateAssessment
You can execute the `UpdateAssessment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateAssessment(): MutationPromise<UpdateAssessmentData, undefined>;

interface UpdateAssessmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateAssessmentData, undefined>;
}
export const updateAssessmentRef: UpdateAssessmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAssessment(dc: DataConnect): MutationPromise<UpdateAssessmentData, undefined>;

interface UpdateAssessmentRef {
  ...
  (dc: DataConnect): MutationRef<UpdateAssessmentData, undefined>;
}
export const updateAssessmentRef: UpdateAssessmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAssessmentRef:
```typescript
const name = updateAssessmentRef.operationName;
console.log(name);
```

### Variables
The `UpdateAssessment` mutation has no variables.
### Return Type
Recall that executing the `UpdateAssessment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAssessmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAssessmentData {
  assessment_update?: Assessment_Key | null;
}
```
### Using `UpdateAssessment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAssessment } from '@dataconnect/generated';


// Call the `updateAssessment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAssessment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAssessment(dataConnect);

console.log(data.assessment_update);

// Or, you can use the `Promise` API.
updateAssessment().then((response) => {
  const data = response.data;
  console.log(data.assessment_update);
});
```

### Using `UpdateAssessment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAssessmentRef } from '@dataconnect/generated';


// Call the `updateAssessmentRef()` function to get a reference to the mutation.
const ref = updateAssessmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAssessmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.assessment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.assessment_update);
});
```

## DeleteAssessment
You can execute the `DeleteAssessment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAssessment(): MutationPromise<DeleteAssessmentData, undefined>;

interface DeleteAssessmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteAssessmentData, undefined>;
}
export const deleteAssessmentRef: DeleteAssessmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAssessment(dc: DataConnect): MutationPromise<DeleteAssessmentData, undefined>;

interface DeleteAssessmentRef {
  ...
  (dc: DataConnect): MutationRef<DeleteAssessmentData, undefined>;
}
export const deleteAssessmentRef: DeleteAssessmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAssessmentRef:
```typescript
const name = deleteAssessmentRef.operationName;
console.log(name);
```

### Variables
The `DeleteAssessment` mutation has no variables.
### Return Type
Recall that executing the `DeleteAssessment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAssessmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAssessmentData {
  assessment_delete?: Assessment_Key | null;
}
```
### Using `DeleteAssessment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAssessment } from '@dataconnect/generated';


// Call the `deleteAssessment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAssessment();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAssessment(dataConnect);

console.log(data.assessment_delete);

// Or, you can use the `Promise` API.
deleteAssessment().then((response) => {
  const data = response.data;
  console.log(data.assessment_delete);
});
```

### Using `DeleteAssessment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAssessmentRef } from '@dataconnect/generated';


// Call the `deleteAssessmentRef()` function to get a reference to the mutation.
const ref = deleteAssessmentRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAssessmentRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.assessment_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.assessment_delete);
});
```

## CreateSubmission
You can execute the `CreateSubmission` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSubmission(): MutationPromise<CreateSubmissionData, undefined>;

interface CreateSubmissionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSubmissionData, undefined>;
}
export const createSubmissionRef: CreateSubmissionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSubmission(dc: DataConnect): MutationPromise<CreateSubmissionData, undefined>;

interface CreateSubmissionRef {
  ...
  (dc: DataConnect): MutationRef<CreateSubmissionData, undefined>;
}
export const createSubmissionRef: CreateSubmissionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSubmissionRef:
```typescript
const name = createSubmissionRef.operationName;
console.log(name);
```

### Variables
The `CreateSubmission` mutation has no variables.
### Return Type
Recall that executing the `CreateSubmission` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSubmissionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSubmissionData {
  submission_insert: Submission_Key;
}
```
### Using `CreateSubmission`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSubmission } from '@dataconnect/generated';


// Call the `createSubmission()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSubmission();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSubmission(dataConnect);

console.log(data.submission_insert);

// Or, you can use the `Promise` API.
createSubmission().then((response) => {
  const data = response.data;
  console.log(data.submission_insert);
});
```

### Using `CreateSubmission`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSubmissionRef } from '@dataconnect/generated';


// Call the `createSubmissionRef()` function to get a reference to the mutation.
const ref = createSubmissionRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSubmissionRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.submission_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.submission_insert);
});
```

## UpdateSubmission
You can execute the `UpdateSubmission` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateSubmission(): MutationPromise<UpdateSubmissionData, undefined>;

interface UpdateSubmissionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateSubmissionData, undefined>;
}
export const updateSubmissionRef: UpdateSubmissionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSubmission(dc: DataConnect): MutationPromise<UpdateSubmissionData, undefined>;

interface UpdateSubmissionRef {
  ...
  (dc: DataConnect): MutationRef<UpdateSubmissionData, undefined>;
}
export const updateSubmissionRef: UpdateSubmissionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSubmissionRef:
```typescript
const name = updateSubmissionRef.operationName;
console.log(name);
```

### Variables
The `UpdateSubmission` mutation has no variables.
### Return Type
Recall that executing the `UpdateSubmission` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSubmissionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSubmissionData {
  submission_update?: Submission_Key | null;
}
```
### Using `UpdateSubmission`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSubmission } from '@dataconnect/generated';


// Call the `updateSubmission()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSubmission();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSubmission(dataConnect);

console.log(data.submission_update);

// Or, you can use the `Promise` API.
updateSubmission().then((response) => {
  const data = response.data;
  console.log(data.submission_update);
});
```

### Using `UpdateSubmission`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSubmissionRef } from '@dataconnect/generated';


// Call the `updateSubmissionRef()` function to get a reference to the mutation.
const ref = updateSubmissionRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSubmissionRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.submission_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.submission_update);
});
```

## DeleteSubmission
You can execute the `DeleteSubmission` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteSubmission(): MutationPromise<DeleteSubmissionData, undefined>;

interface DeleteSubmissionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteSubmissionData, undefined>;
}
export const deleteSubmissionRef: DeleteSubmissionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSubmission(dc: DataConnect): MutationPromise<DeleteSubmissionData, undefined>;

interface DeleteSubmissionRef {
  ...
  (dc: DataConnect): MutationRef<DeleteSubmissionData, undefined>;
}
export const deleteSubmissionRef: DeleteSubmissionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSubmissionRef:
```typescript
const name = deleteSubmissionRef.operationName;
console.log(name);
```

### Variables
The `DeleteSubmission` mutation has no variables.
### Return Type
Recall that executing the `DeleteSubmission` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSubmissionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSubmissionData {
  submission_delete?: Submission_Key | null;
}
```
### Using `DeleteSubmission`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSubmission } from '@dataconnect/generated';


// Call the `deleteSubmission()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSubmission();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSubmission(dataConnect);

console.log(data.submission_delete);

// Or, you can use the `Promise` API.
deleteSubmission().then((response) => {
  const data = response.data;
  console.log(data.submission_delete);
});
```

### Using `DeleteSubmission`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSubmissionRef } from '@dataconnect/generated';


// Call the `deleteSubmissionRef()` function to get a reference to the mutation.
const ref = deleteSubmissionRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSubmissionRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.submission_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.submission_delete);
});
```

