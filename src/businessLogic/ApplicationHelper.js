class ApplicationHelper {
  static getApps () {
    return [
      {
        ApplicationId: 1,
        ApplicationName: 'Members_3.0.0',
        Releases: [
          {
            Id: 1,
            Build: 'Members_20160311_1',
            StatusName: 'Rejected',
            CurrentStageTypeName: 'In Test'
          },
          {
            Id: 2,
            Build: 'Members_20160311_2',
            StatusName: 'In progress',
            CurrentStageTypeName: 'In Development'
          },
          {
            Id: 3,
            Build: 'Members_20160310_1',
            StatusName: 'In progress',
            CurrentStageTypeName: 'In QA'
          }
        ]
      },
      {
        ApplicationId: 2,
        ApplicationName: 'Global_4.0.0',
        Releases: [
          {
            Id: 4,
            Build: 'Global_20160311_1',
            StatusName: 'Rejected',
            CurrentStageTypeName: 'In Test'
          },
          {
            Id: 5,
            Build: 'Global_20160311_2',
            StatusName: 'In progress',
            CurrentStageTypeName: 'In Development'
          },
          {
            Id: 6,
            Build: 'Global_20160310_1',
            StatusName: 'In progress',
            CurrentStageTypeName: 'In QA'
          }
        ]
      }
    ];
  }
}

export default ApplicationHelper;
