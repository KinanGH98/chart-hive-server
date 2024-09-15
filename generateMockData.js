const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMockData = () =>
{
    return {
        activeUsersOverTime: getActiveUsersOverTime(),
        topSearchQueries: [
            {name: "React", value: getRandomInt(100, 500)},
            {name: "Redux", value: getRandomInt(50, 300)},
            {name: "WebSocket", value: getRandomInt(20, 200)},
            {name: "API Integration", value: getRandomInt(30, 150)},
            {name: "Context API", value: getRandomInt(40, 100)},
        ],
        userActivityByRegion: [
            getRandomInt(1, 100),
            getRandomInt(1, 100),
            getRandomInt(1, 100)
        ],
        newSignupsPerDay: Array.from({length: 7}, (_, i) => ({
            day: `Day ${i + 1}`,
            Signups: getRandomInt(20, 150),
        })),
        retentionRateOverTime: Array.from({length: 7}, (_, i) => ({
            time: `Week ${i + 1}`,
            RetentionRate: getRandomInt(50, 90), // Retention rate in percentage
        })),
        mostPopularFeatures: [
            {name: "Dark Mode", value: getRandomInt(500, 1500)},
            {name: "Push Notifications", value: getRandomInt(400, 1200)},
            {name: "Offline Mode", value: getRandomInt(300, 1000)},
        ],
        churnRate: Array.from({length: 7}, (_, i) => ({
            time: `Month ${i + 1}`,
            ChurnRate: getRandomInt(2, 10), // Churn rate in percentage
        })),
        userDemographics: [
            {category: "18-24", age: getRandomInt(100, 500)},
            {category: "25-34", age: getRandomInt(200, 700)},
            {category: "35-44", age: getRandomInt(100, 400)},
            {category: "45-54", age: getRandomInt(50, 200)},
            {category: "55+", age: getRandomInt(20, 100)}
        ],
    };
};

function getActiveUsersOverTime()
{
    const data = [];
    const today = new Date();

    for (let i = 0; i < 7; i++)
    {
        const date = new Date();
        date.setDate(today.getDate() - i);

        // Format the date as 'MM-DD'
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${month}-${day}`;

        const activeUsers = getRandomInt(1000, 5000);

        data.push({Time: formattedDate, ActiveUsers: activeUsers});
    }

    // Show the oldest date first.
    return data.reverse();
}

module.exports = {generateMockData}