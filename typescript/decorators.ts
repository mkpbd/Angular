const Log = () => {
    return (target: any, name: string, descriptor: any) => {
        console.log(`call to ${name}`);
        return descriptor;
    };
};
class RaceService {
    @Log()
    getRaces() {
        // call API
    }
    @Log()
    getRace(raceId: number) {
        // call API
    }
}