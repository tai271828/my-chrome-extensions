var warningId = 'notification.warning';

function hideWarning(done) {
          chrome.notifications.clear(warningId, function() {
                      if (done) done();
                        });
}

function showWarning() {
          hideWarning(function() {
                      chrome.notifications.create(warningId, {
                                    iconUrl: chrome.runtime.getURL('img/fake.png'),
                                    title: 'FOCUS!!',
                                    type: 'basic',
                                    message: 'Please focus on ' +
                                             'something in your daily life.',
                                    isClickable: true,
                                    priority: 2,
                                  }, function() {});
                        });
}

chrome.runtime.onInstalled.addListener(showWarning);
//chrome.alarms.onAlarm.addListener(showWarning);
