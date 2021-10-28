# EverydayHealth NodeJS Coding Test

Given the data in /data/user_nl_tracking_data.csv, create an API to get the aggregated data.

## Data

csv file containing record for user activity for newsletters.

#### Schema

- **user_id** : id of a user (1 to 10)
- **newsletter_id** : id of a newsletter (100 to 110)
- **action**: user action on newsletter emails (open or click)
- **activity_date**: date when user open/click on the newsletter email (from 2021-06-01 to 2021-06-06)

## API Requirement

#### GetNLSummary

- **Argument**: newsletter_id
- **Response**: return count per day for the given newsletter_id

#### GetUserSummary

- **Argument**: user_id
- **Response**: return count per day for the given user_id

#### GetNLActionSummary

- **Argument**: newsletter_id
- **Response**: daily open and click action counts for given newsletter_id

## Use Instructions

- The application is designed to be executed using docker-compose cli.

- The mocked information from the .csv file will be populate using migrations on a mongodb database.

In order to tray demo run the next command.

```
> docker-compose up
```

it will run:

1. `migrate:up` to execute data migrations.
2. `test` to execute unittest.
3. `test:e2e` to execute end to end test.
4. `start`, start server.

## Swagger

swagger available on url root

```
\
```

## Observation

- If demo were already ran and you desire rerun the migrations, make sure you delete the `.migrate` file in the root of the project.
