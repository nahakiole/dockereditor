const {createApp} = Vue

createApp({
    data() {
        return {
            command: {},
            input: `docker run -it --rm \\
 --name n8n \\
 -p 5678:5678 \\
 -e DB_TYPE=postgresdb \\
 -e DB_POSTGRESDB_DATABASE=<POSTGRES_DATABASE> \\
 -e DB_POSTGRESDB_HOST=<POSTGRES_HOST> \\
 -e DB_POSTGRESDB_PORT=<POSTGRES_PORT> \\
 -e DB_POSTGRESDB_USER=<POSTGRES_USER> \\
 -e DB_POSTGRESDB_SCHEMA=<POSTGRES_SCHEMA> \\
 -e DB_POSTGRESDB_PASSWORD=<POSTGRES_PASSWORD> \\
 -v ~/.n8n:/home/node/.n8n \\
 docker.n8n.io/n8nio/n8n \\
 n8n start`,
            output: ``,
            helptext: {
                '-v': {
                    'title': 'Volumes',
                    'description': 'Bind mount a volume',
                    'example': '-v <host path>:<container path>',
                    'example2': '-v <host path>:<container path>:<options>',
                    'link': 'https://docs.docker.com/storage/bind-mounts/'
                },
                '-p': {
                    'title': 'Ports',
                    'description': 'Publish a container’s port(s) to the host',
                    'example': '-p <host port>:<container port>',
                    'example2': '-p <host ip>:<host port>:<container port>',
                    'link': 'https://docs.docker.com/config/containers/container-networking/'
                },
                '-d': {
                    'title': 'Detached Mode',
                    'description': 'Runs the container in the background and prints the container ID',
                    'example': '-d',
                    'link': 'https://docs.docker.com/engine/reference/run/#detached--d'
                },
                '--name': {
                    'title': 'Naming a Container',
                    'description': 'Assign a name to the container',
                    'example': '--name my_container',
                    'link': 'https://docs.docker.com/engine/reference/run/#name--name'
                },
                '-e': {
                    'title': 'Environment Variables',
                    'description': 'Set environment variables in the container',
                    'example': '-e VAR=value',
                    'link': 'https://docs.docker.com/engine/reference/run/#env-environment-variables'
                },
                '--restart': {
                    'title': 'Restart Policies',
                    'description': 'Define the restart policy for the container',
                    'example': '--restart always',
                    'example2': '--restart on-failure',
                    'link': 'https://docs.docker.com/config/containers/start-containers-automatically/'
                },
                '-it': {
                    'title': 'Interactive Mode',
                    'description': 'Keep STDIN open and allocate a pseudo-TTY, usually for interactive processes',
                    'example': '-it',
                    'link': 'https://docs.docker.com/engine/reference/run/#foreground'
                },
                '--rm': {
                    'title': 'Automatically Remove the Container',
                    'description': 'Automatically remove the container when it exits',
                    'example': '--rm',
                    'link': 'https://docs.docker.com/engine/reference/run/#clean-up---rm'
                },
                '--net': {
                    'title': 'Network Settings',
                    'description': 'Connect a container to a network',
                    'example': '--net=bridge',
                    'example2': '--net=host',
                    'link': 'https://docs.docker.com/network/bridge/'
                },
                '-u': {
                    'title': 'User',
                    'description': 'Sets the username or UID to use within the container',
                    'example': '-u <username>',
                    'example2': '-u <uid>',
                    'link': 'https://docs.docker.com/engine/reference/run/#user'
                },
                '--privileged': {
                    'title': 'Privileged Mode',
                    'description': 'Give extended privileges to this container',
                    'example': '--privileged',
                    'link': 'https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities'
                },
                '--userns': {
                    'title': 'User Namespace',
                    'description': 'Set the user namespace mode for the container',
                    'example': '--userns=host',
                    'link': 'https://docs.docker.com/engine/security/userns-remap/'
                },
                '--ulimit': {
                    'title': 'Ulimits',
                    'description': 'Set ulimits for the container',
                    'example': '--ulimit nofile=1024:2048',
                    'link': 'https://docs.docker.com/engine/reference/commandline/run/#set-ulimits-in-container---ulimit'
                },
                '--tmpfs': {
                    'title': 'Temporary Filesystems',
                    'description': 'Mount a temporary filesystem (tmpfs) mount within a container',
                    'example': '--tmpfs /tmp',
                    'link': 'https://docs.docker.com/storage/tmpfs/'
                },
                '--memory': {
                    'title': 'Memory Limit',
                    'description': 'Set memory limit for the container',
                    'example': '--memory=2g',
                    'link': 'https://docs.docker.com/config/containers/resource_constraints/#limit-a-containers-access-to-memory'
                },
                '--cpu-shares': {
                    'title': 'CPU Shares',
                    'description': 'Set CPU shares (relative weight)',
                    'example': '--cpu-shares=512',
                    'link': 'https://docs.docker.com/config/containers/resource_constraints/#cpu'
                },
                '--log-driver': {
                    'title': 'Log Driver',
                    'description': 'Specify a log driver for the container',
                    'example': '--log-driver=json-file',
                    'link': 'https://docs.docker.com/config/containers/logging/configure/'
                },
                '--health-cmd': {
                    'title': 'Healthcheck Command',
                    'description': 'Command to run to check health',
                    'example': '--health-cmd="curl -f http://localhost/"',
                    'link': 'https://docs.docker.com/engine/reference/run/#healthcheck'
                },
                '--gpus': {
                    'title': 'NVIDIA GPUs',
                    'description': 'Allocate specific GPUs to your Docker container',
                    'example': '--gpus all',
                    'example2': '--gpus 2',
                    'link': 'https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/user-guide.html#gpu-enumeration'
                },
                '--runtime=nvidia': {
                    'title': 'NVIDIA Runtime',
                    'description': 'Use the NVIDIA Docker runtime (used in versions prior to Docker 19.03)',
                    'example': '--runtime=nvidia -e NVIDIA_VISIBLE_DEVICES=all',
                    'link': 'https://github.com/NVIDIA/nvidia-container-runtime'
                },
                'run': {
                    'title': 'Run Command',
                    'description': 'Used to start a new container from an image',
                    'example': 'docker run -d -p 80:80 my_image',
                    'link': 'https://docs.docker.com/engine/reference/commandline/run/'
                },
                'build': {
                    'title': 'Build Command',
                    'description': 'Used to build an image from a Dockerfile',
                    'example': 'docker build -t my_image .',
                    'link': 'https://docs.docker.com/engine/reference/commandline/build/'
                },
                'pull': {
                    'title': 'Pull Command',
                    'description': 'Used to pull an image from a registry',
                    'example': 'docker pull my_image',
                    'link': 'https://docs.docker.com/engine/reference/commandline/pull/'
                },
                'push': {
                    'title': 'Push Command',
                    'description': 'Used to push an image to a registry',
                    'example': 'docker push my_image',
                    'link': 'https://docs.docker.com/engine/reference/commandline/push/'
                },
                'exec': {
                    'title': 'Exec Command',
                    'description': 'Used to run a command in a running container',
                    'example': 'docker exec my_container ls',
                    'link': 'https://docs.docker.com/engine/reference/commandline/exec/'
                },
                'logs': {
                    'title': 'Logs Command',
                    'description': 'Fetch the logs of a container',
                    'example': 'docker logs my_container',
                    'link': 'https://docs.docker.com/engine/reference/commandline/logs/'
                },
                '--cidfile': {
                    'title': 'CID File',
                    'description': 'Write the container ID to the file',
                    'example': '--cidfile /path/to/cidfile',
                    'link': 'https://docs.docker.com/engine/reference/run/#options'
                }
            }
        }
    },
    watch: {
        input(newVal, oldVal) {
            this.command = splitCommand(newVal);
            console.log(this.command);
            this.output = assembleCommand(this.command);
        },
        command: {
            handler() {
                this.output = assembleCommand(this.command);
            },
            deep: true
        }
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.output).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
                // Select the text field
                var copyText = document.getElementById("output");
                copyText.select();
            });
        },
        scrollIntoView(index, type) {
            console.log(this.$refs[`${type}Input`][index])
            this.$refs[`${type}Input`][index].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        }
    },
    created() {
        this.command = splitCommand(this.input);
        console.log(this.command);
        this.output = assembleCommand(this.command);
    }

}).mount('#app')

function splitCommand(command) {
    // Split command into individual parts
    var parts = command.split(" ");

    // Remove any empty parts
    var nonEmptyParts = parts.filter(part => part.trim() !== "");

    // Separate parts into parameters and their values
    var parameters = [];

    let continueNext = false;
    nonEmptyParts.forEach((part, i) => {
        if (continueNext) {
            continueNext = false;
            return;
        }
        // If part starts with '-', it's a parameter.
        // Also check if next part doesn't start with '-', if so, combine them
        if (part.startsWith("-")) {
            if (nonEmptyParts[i + 1] && !nonEmptyParts[i + 1].startsWith("-")) {
                if (nonEmptyParts[i + 1].startsWith("\\")) {
                    parameters.push({parameter: part, value: null});
                } else {
                    if (nonEmptyParts[i + 1].includes("=")) {
                        let parts = splitIncludeSeparator(nonEmptyParts[i + 1], "=");
                        parameters.push({parameter: part, value: parts});
                    }
                    else if (nonEmptyParts[i + 1].includes(":")) {
                        let parts = splitIncludeSeparator(nonEmptyParts[i + 1], ":");
                        parameters.push({parameter: part, value: parts});
                    }
                    else {
                        parameters.push({parameter: part, value: [nonEmptyParts[i + 1]]});
                    }
                }
                continueNext = true;
            } else {
                parameters.push({parameter: part, value: []});
            }
        } else {
            if (part.startsWith("\\")) {
                return;
            }

            parameters.push({parameter: part, value: []});
        }
    });

    return parameters;
}

function splitIncludeSeparator(str, separator) {
    return str.split(new RegExp(`(${separator})`));
}

function assembleCommand(parameters) {
    // Start with an empty command
    var command = "";

    parameters.forEach(parameter => {
        // If the parameter has a value, add both to the command
        if (parameter.value !== null) {
            if (Array.isArray(parameter.value)) {
                command += parameter.parameter + " " + parameter.value.join("") + " \\\n";
            }
            else {
                command += parameter.parameter + " " + parameter.value + " \\\n";
            }
        }
        // If the parameter has no value, just add the parameter itself
        else {
            command += parameter.parameter  + " \\\n";
        }
    });

    // Remove the last line break and backslash
    command = command.slice(0, -3);

    // Trim the trailing space and return the command
    return command.trim();
}
