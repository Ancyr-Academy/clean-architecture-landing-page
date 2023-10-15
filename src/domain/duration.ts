export class Duration {
  constructor(private seconds: number) {}

  toString(): string {
    let seconds = this.seconds;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    days = Math.floor(seconds / 86400);
    if (days > 0) {
      return `${days} jours`;
    }

    if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600);
      seconds = seconds - hours * 3600;
    }

    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
    }

    return `${days}j ${this.pad(hours)}h ${this.pad(minutes)}m ${this.pad(
      seconds
    )}s`;
  }

  private pad(number: number): string {
    return number.toString().padStart(2, "0");
  }
}
